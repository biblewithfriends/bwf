/**
 * Church in Burlingame YP (CiB YP) — Google Apps Script backend (runs on your Google Sheet)
 * ================================================================
 *
 *  ✉️  WHO GETS AN EMAIL WHEN A NEW QUESTION COMES IN
 *      Add or remove addresses here, one per line, each in quotes with a comma.
 */
const NOTIFY_EMAILS = [
  'serving.one@example.com',
  // 'another.serving.one@example.com',
];

/** 🔐 Passcode for the Serving Ones site. Share it only with the serving ones. */
const PARENT_PASSCODE = 'CHANGE-ME';

/** 🍂 Tree of Life: should leaves from the YP wait for a serving one to approve them?
 *     false = they appear on the tree right away (you can still remove any leaf)
 *     true  = they appear only after you tap "Show on tree" on the Serving Ones site */
const LEAVES_NEED_APPROVAL = false;

/** ✉️ Also email NOTIFY_EMAILS when a YP hangs a new leaf on the tree? */
const EMAIL_ON_NEW_LEAF = true;

/** Optional: the Serving Ones site link, so emails can include a button to answer. */
const SERVE_SITE_URL = 'https://biblewfriends.org/ypservice/';

// ---- you normally don't need to change anything below this line ----
const SPREADSHEET_ID = '1tnTSm65QHjnTzAkqNcK12KNYyw0IW50w6KsDQLjcKvw';
const TIMEZONE = 'America/Los_Angeles';
const PHOTO_FOLDER_NAME = 'YP Tree of Life Photos';

const TAB = {
  Q: 'Questions', R: 'Readings', EN: 'Tree of Life', QUOTES: 'YP Quotes', SCORES: 'High Scores'
};
const HEADERS = {
  'Questions':       ['Timestamp', 'Name (blank = anonymous)', 'Question', 'Status', 'Answer', 'Answered At'],
  'Readings':        ['Date', 'Book', 'Chapter', 'Note'],
  'Tree of Life':    ['Posted At', 'Who', 'Name', 'Feeling', 'Message', 'Verse', 'Photo File ID', 'Status'],
  'YP Quotes':       ['Quote', 'Show'],
  'High Scores':     ['Timestamp', 'Game', 'Day', 'Reading', 'Name', 'Score', 'Detail']
};
const GAMES = { transformed: 'lower', overcomers: 'higher', bubbles: 'higher' };

/* ================================================================
 *  SETUP — run once from the editor (pick "setup" → ▶ Run)
 * ================================================================ */
function setup() {
  const ss = ss_();
  Object.keys(HEADERS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, HEADERS[name].length).setValues([HEADERS[name]]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
  });
  // keep dates as plain text so they never shift
  ss.getSheetByName(TAB.R).getRange('A:A').setNumberFormat('@');
  const tree = ss.getSheetByName(TAB.EN);
  tree.setColumnWidth(5, 420);
  tree.getRange(2, 8, Math.max(1, tree.getMaxRows() - 1), 1).setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(['Shown', 'Waiting', 'Hidden'], true).setAllowInvalid(true).build());
  // bring over posts from the old "Weekly Enjoyment" tab (only the first time)
  const oldEn = ss.getSheetByName('Weekly Enjoyment');
  if (oldEn && tree.getLastRow() < 2 && oldEn.getLastRow() >= 2) {
    const v = oldEn.getRange(2, 1, oldEn.getLastRow() - 1, 7).getValues().filter(r => String(r[3]).trim())
      .map(r => [r[6] instanceof Date ? r[6] : new Date(), 'Serving one', r[1] || '', r[2] || '', r[3], r[4] || '', r[5] || '', 'Shown']);
    if (v.length) tree.getRange(2, 1, v.length, 8).setValues(v);
  }
  ss.getSheetByName(TAB.SCORES).getRange('C:C').setNumberFormat('@');

  const q = ss.getSheetByName(TAB.Q);
  q.getRange(2, 4, Math.max(1, q.getMaxRows() - 1), 1).setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(['New', 'Approved', 'Hidden'], true).setAllowInvalid(true).build());
  q.setColumnWidth(3, 420); q.setColumnWidth(5, 420);

  // copy old Google Form answers over (only the first time)
  const old = ss.getSheetByName('Form Responses 1');
  if (old && q.getLastRow() < 2 && old.getLastRow() >= 2) {
    const v = old.getRange(2, 1, old.getLastRow() - 1, Math.max(5, old.getLastColumn())).getValues()
      .filter(r => String(r[1]).trim())
      .map(r => [r[0], '', r[1], r[2] || 'New', r[3] || '', r[4] || '']);
    if (v.length) q.getRange(2, 1, v.length, 6).setValues(v);
  }

  // starter quotes for the banner
  const qt = ss.getSheetByName(TAB.QUOTES);
  if (qt.getLastRow() < 2) {
    const starter = [['bro what 💀'], ['that’s lowkey so real'], ['can we get boba after?'], ['fly high!'], ['AMEN 🙌'], ['ok but hear me out']];
    qt.getRange(2, 1, starter.length, 1).setValues(starter);
    qt.getRange(2, 2, 200, 1).insertCheckboxes();
    qt.getRange(2, 2, starter.length, 1).check();
    qt.setColumnWidth(1, 380);
  }

  photoFolder_();                   // creates the Drive folder for photos
  MailApp.getRemainingDailyQuota(); // asks for email permission now
  Logger.log('✅ Setup done. Next: Deploy → New deployment → Web app.');
}

/** Optional: run this to check the emails arrive. */
function sendTestEmail() {
  notify_('This is a test question from the CiB YP setup.', '');
  Logger.log('Sent to: ' + emails_().join(', '));
}

/* ================================================================
 *  PUBLIC (YP site)
 * ================================================================ */
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'public';
  try {
    if (action === 'public') {
      return json_({ ok: true, readings: readings_(), leaves: leaves_(false), quotes: quotes_(), answers: answers_() });
    }
    if (action === 'scores') return json_({ ok: true, scores: scores_() });
    return json_({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function doPost(e) {
  let b = {};
  try { b = JSON.parse(e.postData.contents || '{}'); } catch (err) { return json_({ ok: false, error: 'Bad request' }); }
  try {
    // ---- open to everyone ----
    if (b.action === 'ask') return ask_(b);
    if (b.action === 'score') return score_(b);
    if (b.action === 'leaf') return leaf_(b, false);

    // ---- serving ones only ----
    if (String(b.code || '') !== PARENT_PASSCODE) return json_({ ok: false, error: 'Wrong passcode' });
    switch (b.action) {
      case 'list':          return json_({ ok: true, items: allQuestions_() });
      case 'update':        return update_(b);
      case 'setReadings':   return setReadings_(b);
      case 'allLeaves':     return json_({ ok: true, leaves: leaves_(true) });
      case 'addLeaf':       return leaf_(b, true);
      case 'setLeaf':       return setLeaf_(b);
      case 'deleteLeaf':    return deleteLeaf_(b);
      case 'deleteScore':   return deleteScore_(b);
    }
    return json_({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

/* ---------------- questions ---------------- */
function ask_(b) {
  if (b.website) return json_({ ok: true });                 // spam trap
  const question = clean_(b.question, 2000);
  if (!question) return json_({ ok: false, error: 'Type a question first' });
  const name = b.anonymous === false ? clean_(b.name, 60) : '';
  if (tooMany_('ask', 30)) return json_({ ok: false, error: 'Lots of questions right now — try again in a minute' });
  withLock_(() => sheet_(TAB.Q).appendRow([new Date(), name, question, 'New', '', '']));
  try { notify_(question, name); } catch (err) { console.error('Email failed: ' + err); }
  return json_({ ok: true });
}

function notify_(question, name) {
  const to = emails_();
  if (!to.length) return;
  const who = name ? 'From: ' + name : 'From: Anonymous';
  const link = SERVE_SITE_URL ? '\n\nAnswer it here: ' + SERVE_SITE_URL : '';
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  MailApp.sendEmail({
    to: to.join(','),
    subject: '📮 New Q Box question',
    name: 'YP Q Box',
    body: who + '\n\n' + question + link,
    htmlBody: '<p style="color:#666">' + esc(who) + '</p><p style="font-size:18px;white-space:pre-wrap">' + esc(question) + '</p>' +
      (SERVE_SITE_URL ? '<p><a href="' + SERVE_SITE_URL + '">Open the Serving Ones site to answer →</a></p>' : '')
  });
}

function allQuestions_() {
  const sh = sheet_(TAB.Q), last = sh.getLastRow();
  if (last < 2) return [];
  return sh.getRange(2, 1, last - 1, 6).getValues().map((v, i) => {
    const status = ['Approved', 'Hidden'].indexOf(String(v[3]).trim()) >= 0 ? String(v[3]).trim() : 'New';
    return {
      id: i + 2, name: String(v[1] || '').trim(), question: String(v[2] || '').trim(), status: status,
      answer: String(v[4] || '').trim(),
      time: v[0] instanceof Date ? Utilities.formatDate(v[0], TIMEZONE, 'MMM d, yyyy h:mm a') : String(v[0] || ''),
      t: v[0] instanceof Date ? v[0].getTime() : 0,
      answered: v[5] instanceof Date ? Utilities.formatDate(v[5], TIMEZONE, 'yyyy-MM-dd') : '',
      a: v[5] instanceof Date ? v[5].getTime() : 0
    };
  }).filter(q => q.question).sort((x, y) => y.t - x.t);
}

function answers_() {   // never includes names
  return allQuestions_().filter(q => q.status === 'Approved' && q.answer).sort((x, y) => y.a - x.a)
    .map(q => ({ id: q.id, question: q.question, answer: q.answer, answered: q.answered }));
}

function update_(b) {
  const row = Number(b.id), status = ['New', 'Approved', 'Hidden'].indexOf(b.status) >= 0 ? b.status : 'New';
  withLock_(() => {
    const sh = sheet_(TAB.Q);
    if (!row || row < 2 || row > sh.getLastRow()) throw new Error('Question not found');
    const cur = sh.getRange(row, 6).getValue();
    sh.getRange(row, 4, 1, 3).setValues([[status, clean_(b.answer, 5000), status === 'Approved' ? new Date() : (cur || '')]]);
  });
  return json_({ ok: true });
}

/* ---------------- readings ---------------- */
function readings_() {
  const sh = sheet_(TAB.R), last = sh.getLastRow();
  if (last < 2) return [];
  const today = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd');
  const from = shift_(today, -35), to = shift_(today, 120);
  return sh.getRange(2, 1, last - 1, 4).getValues()
    .map(v => ({ date: day_(v[0]), book: String(v[1] || '').trim(), chapter: Number(v[2]) || '', note: String(v[3] || '').trim() }))
    .filter(r => r.date && r.book && r.date >= from && r.date <= to);
}

function setReadings_(b) {
  const dates = (b.dates || []).filter(isDay_);
  const items = (b.items || []).filter(i => isDay_(i.date) && clean_(i.book, 40));
  withLock_(() => {
    const sh = sheet_(TAB.R), last = sh.getLastRow();
    if (last >= 2) {
      const v = sh.getRange(2, 1, last - 1, 1).getValues();
      for (let i = v.length - 1; i >= 0; i--) if (dates.indexOf(day_(v[i][0])) >= 0) sh.deleteRow(i + 2);
    }
    if (items.length) {
      const start = sh.getLastRow() + 1;
      sh.getRange(start, 1, items.length, 1).setNumberFormat('@');
      sh.getRange(start, 1, items.length, 4).setValues(items.map(i => [i.date, clean_(i.book, 40), Number(i.chapter) || '', clean_(i.note, 120)]));
    }
  });
  return json_({ ok: true });
}

/* ---------------- 🍂 Tree of Life (everyone's enjoyment) ---------------- */
// all = true (Serving Ones site) returns every leaf with its status; otherwise only shown leaves.
function leaves_(all) {
  const sh = ss_().getSheetByName(TAB.EN);   // a missing tab just means "no leaves yet"
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues()
    .map(v => ({ t: v[0] instanceof Date ? v[0].getTime() : 0, who: String(v[1] || ''), name: String(v[2] || ''), feeling: String(v[3] || ''),
      message: String(v[4] || ''), verse: String(v[5] || ''), fid: String(v[6] || ''), status: ['Waiting', 'Hidden'].indexOf(String(v[7]).trim()) >= 0 ? String(v[7]).trim() : 'Shown' }))
    .filter(r => r.t && r.message && (all || r.status === 'Shown'))
    .sort((a, b) => b.t - a.t)
    .slice(0, all ? 300 : 150)
    .map(r => ({ id: String(r.t), day: Utilities.formatDate(new Date(r.t), TIMEZONE, 'yyyy-MM-dd'),
      so: r.who === 'Serving one', name: r.name, feeling: r.feeling, message: r.message, verse: r.verse,
      url: r.fid ? 'https://drive.google.com/thumbnail?id=' + r.fid + '&sz=w1600' : '', status: all ? r.status : undefined }));
}

// byServingOne = true when it comes from the Serving Ones site (passcode checked in doPost)
function leaf_(b, byServingOne) {
  if (!byServingOne && b.website) return json_({ ok: true });                 // spam trap
  const message = clean_(b.message, byServingOne ? 3000 : 600);
  if (!message) throw new Error('Write your enjoyment first');
  const name = clean_(b.name, byServingOne ? 60 : 30);
  if (!byServingOne) {
    if (unkind_(name + ' ' + message)) throw new Error('Let’s keep the tree kind 🙂 — try different words');
    if (tooMany_('leaf', 30)) throw new Error('Lots of leaves right now — try again in a minute');
  }
  let fid = '';
  if (byServingOne && b.image) {
    const m = String(b.image).match(/^data:(image\/[a-z+]+);base64,(.+)$/);
    if (!m) throw new Error('That file isn’t an image');
    const bytes = Utilities.base64Decode(m[2]);
    if (bytes.length > 8 * 1024 * 1024) throw new Error('Photo is too big');
    const file = photoFolder_().createFile(Utilities.newBlob(bytes, m[1], 'Tree of Life ' + new Date().toISOString().slice(0, 10) + '.jpg'));
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    fid = file.getId();
  }
  const status = !byServingOne && LEAVES_NEED_APPROVAL ? 'Waiting' : 'Shown';
  withLock_(() => {
    let sh = ss_().getSheetByName(TAB.EN);
    if (!sh) { setup(); sh = sheet_(TAB.EN); }
    sh.appendRow([new Date(), byServingOne ? 'Serving one' : 'YP', name, clean_(b.feeling, 40), message, clean_(b.verse, 80), fid, status]);
  });
  if (!byServingOne && EMAIL_ON_NEW_LEAF) {
    try {
      const to = emails_();
      if (to.length) MailApp.sendEmail({ to: to.join(','), name: 'YP Tree of Life', subject: '🍂 New leaf on the Tree of Life' + (status === 'Waiting' ? ' (waiting for approval)' : ''),
        body: (name ? 'From: ' + name : 'From: a YP (no name)') + (b.feeling ? '\nFeeling: ' + clean_(b.feeling, 40) : '') + '\n\n' + message +
          (b.verse ? '\n\n' + clean_(b.verse, 80) : '') + (SERVE_SITE_URL ? '\n\nManage leaves: ' + SERVE_SITE_URL : '') });
    } catch (err) { console.error('Leaf email failed: ' + err); }
  }
  return json_({ ok: true, waiting: status === 'Waiting' });
}

// word-by-word check so ordinary words like "grape" or "canal" are fine
const BAD_ANYWHERE = ['fuck', 'shit', 'bitch', 'cunt', 'nigg', 'whore', 'slut', 'porn', 'retard', 'asshole'];
const BAD_WHOLE = ['sex', 'sexy', 'anal', 'rape', 'raped', 'cock', 'dick', 'penis', 'vagina', 'boob', 'boobs', 'tits', 'nazi', 'bastard', 'damn', 'fag', 'fags', 'pussy'];
function unkind_(text) {
  const words = String(text).toLowerCase().replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e').replace(/\$/g, 's').split(/[^a-z]+/).filter(Boolean);
  return words.some(w => BAD_WHOLE.indexOf(w) >= 0 || BAD_ANYWHERE.some(b => w.indexOf(b) >= 0));
}

function findLeafRow_(sh, id) {
  const last = sh.getLastRow(); if (last < 2) return -1;
  const v = sh.getRange(2, 1, last - 1, 1).getValues();
  for (let i = v.length - 1; i >= 0; i--) if (v[i][0] instanceof Date && v[i][0].getTime() === Number(id)) return i + 2;
  return -1;
}

function setLeaf_(b) {
  const status = ['Shown', 'Waiting', 'Hidden'].indexOf(b.status) >= 0 ? b.status : 'Shown';
  withLock_(() => { const sh = sheet_(TAB.EN), r = findLeafRow_(sh, b.id); if (r < 0) throw new Error('Leaf not found'); sh.getRange(r, 8).setValue(status); });
  return json_({ ok: true });
}

function deleteLeaf_(b) {
  let fid = '';
  withLock_(() => {
    const sh = sheet_(TAB.EN), r = findLeafRow_(sh, b.id);
    if (r < 0) return;
    fid = String(sh.getRange(r, 7).getValue() || ''); sh.deleteRow(r);
  });
  if (fid) { try { DriveApp.getFileById(fid).setTrashed(true); } catch (err) {} }
  return json_({ ok: true });
}

function photoFolder_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('PHOTO_FOLDER');
  if (id) { try { return DriveApp.getFolderById(id); } catch (err) {} }
  const f = DriveApp.createFolder(PHOTO_FOLDER_NAME);
  props.setProperty('PHOTO_FOLDER', f.getId());
  return f;
}

/* ---------------- quotes ---------------- */
function quotes_() {
  const sh = ss_().getSheetByName(TAB.QUOTES);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues()
    .filter(r => String(r[0]).trim() && r[1] !== false).map(r => String(r[0]).trim().slice(0, 140));
}

/* ---------------- high scores ---------------- */
const BAD_WORDS = ['fuck','shit','bitch','dick','cock','pussy','cunt','slut','whore','nigg','fag','retard','porn','sex','nazi','rape','penis','vagina','boob','titt','anal','asshole','bastard','damn'];

function score_(b) {
  const game = String(b.game || '');
  if (!GAMES[game]) throw new Error('Unknown game');
  const name = clean_(b.name, 20);
  const flat = name.toLowerCase().replace(/[^a-z0-9$]/g, '').replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e').replace(/\$/g, 's');
  if (name.length < 2 || BAD_WORDS.some(w => flat.indexOf(w) >= 0)) throw new Error('Pick a kind nickname');
  if (!isDay_(b.day)) throw new Error('Bad day');
  const score = Number(b.score);
  if (!isFinite(score) || score < 0 || score > ({ transformed: 99, overcomers: 5000, bubbles: 400 })[game]) throw new Error('Bad score');
  if (tooMany_('score', 60)) throw new Error('Busy — try again in a minute');
  let improved = true;
  withLock_(() => {
    const sh = sheet_(TAB.SCORES), last = sh.getLastRow();
    const rows = last >= 2 ? sh.getRange(2, 1, last - 1, 7).getValues() : [];
    const i = rows.findIndex(r => r[1] === game && day_(r[2]) === b.day && String(r[4]).toLowerCase() === name.toLowerCase());
    const row = [new Date(), game, b.day, clean_(b.reading, 40), name, score, clean_(b.detail, 40)];
    if (i < 0) {
      const r = sh.getLastRow() + 1;
      sh.getRange(r, 3).setNumberFormat('@');
      sh.getRange(r, 1, 1, 7).setValues([row]);
    } else {
      const old = rows[i];
      improved = game === 'transformed'
        ? (score < old[5] || (score === Number(old[5]) && Number(b.detail) < Number(old[6])))
        : score > old[5];
      if (improved) sh.getRange(i + 2, 1, 1, 7).setValues([row]);
    }
  });
  return json_({ ok: true, improved: improved });
}

function scores_() {
  const sh = sheet_(TAB.SCORES), last = sh.getLastRow();
  if (last < 2) return [];
  const from = shift_(Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd'), -120);
  return sh.getRange(2, 1, last - 1, 7).getValues()
    .map(v => ({ id: v[0] instanceof Date ? v[0].getTime() : 0, game: String(v[1]), day: day_(v[2]), reading: String(v[3] || ''),
      name: String(v[4] || ''), score: Number(v[5]) || 0, detail: String(v[6] || '') }))
    .filter(s => GAMES[s.game] && s.name && s.day >= from);
}

function deleteScore_(b) {
  const id = Number(b.id);
  withLock_(() => {
    const sh = sheet_(TAB.SCORES), last = sh.getLastRow();
    if (last < 2) return;
    const v = sh.getRange(2, 1, last - 1, 1).getValues();
    for (let i = v.length - 1; i >= 0; i--) if (v[i][0] instanceof Date && v[i][0].getTime() === id) sh.deleteRow(i + 2);
  });
  return json_({ ok: true });
}

/* ---------------- helpers ---------------- */
function ss_() { return SpreadsheetApp.openById(SPREADSHEET_ID); }
function sheet_(name) {
  const sh = ss_().getSheetByName(name);
  if (!sh) throw new Error('Missing tab "' + name + '" — run setup() once');
  return sh;
}
function emails_() { return NOTIFY_EMAILS.map(e => String(e).trim()).filter(e => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e) && e.indexOf('example.com') < 0); }
function clean_(s, max) { return String(s == null ? '' : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max); }
function isDay_(s) { return /^\d{4}-\d{2}-\d{2}$/.test(String(s || '')); }
function day_(v) { return v instanceof Date ? Utilities.formatDate(v, TIMEZONE, 'yyyy-MM-dd') : String(v || '').trim().slice(0, 10); }
function shift_(iso, n) { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return Utilities.formatDate(d, TIMEZONE, 'yyyy-MM-dd'); }
function withLock_(fn) { const l = LockService.getScriptLock(); l.waitLock(15000); try { return fn(); } finally { l.releaseLock(); } }
function tooMany_(key, perMinute) {
  const c = CacheService.getScriptCache(), k = 'rate_' + key + '_' + Math.floor(Date.now() / 60000);
  const n = Number(c.get(k) || 0) + 1; c.put(k, String(n), 120);
  return n > perMinute;
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
