// ============================================================
//  Talks to the Google Apps Script (Google Sheet backend).
//  With no SCRIPT_URL it runs a pretend backend in this browser,
//  so every page can be previewed and clicked through.
// ============================================================
(() => {
  const CFG = window.QBOX_CONFIG || {};
  const DEMO = !CFG.SCRIPT_URL;

  // ---------- safe storage ----------
  const mem = {};
  const store = {
    get(k, d) {
      try { const v = localStorage.getItem(k); if (v != null) return JSON.parse(v); } catch (e) {}
      return k in mem ? mem[k] : d;
    },
    set(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  // ---------- dates (local time) ----------
  const pad = n => String(n).padStart(2, "0");
  const iso = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const parse = s => new Date(s + "T12:00:00");
  const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
  const today = () => iso(new Date());
  const monday = s => { const d = parse(s); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return iso(d); };
  const label = (s, o) => parse(s).toLocaleDateString(undefined, o || { weekday: "short", month: "numeric", day: "numeric" });
  window.DATES = { iso, parse, addDays, today, monday, label };

  // ---------- readings ----------
  function decorate(r) {
    const ch = r.chapter ? parseInt(r.chapter, 10) : "";
    return { ...r, chapter: ch, ref: (r.book + (ch ? " " + ch : "")).trim(), link: window.BIBLE ? window.BIBLE.link(r.book, ch) : "#" };
  }
  function week(readings, mon) {
    mon = mon || monday(today());
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(mon, i);
      return { date, readings: readings.filter(r => r.date === date) };
    });
  }

  // ---------- pretend backend ----------
  function seed() {
    const t = today(), mon = monday(t);
    const plan = [["Hebrews", 11], ["Hebrews", 12], ["Hebrews", 13], ["James", 1], ["James", 2]];
    return {
      questions: [
        { id: 2, time: "Oct 7, 2026 12:09 PM", name: "", question: "If a mime gets arrested, do they still have the right to remain silent?", status: "New", answer: "", answered: "" },
        { id: 3, time: "Oct 7, 2026 12:10 PM", name: "", question: "Does running water get tired?", status: "Approved", answer: "Ha! Never — it just keeps running laps. 🏃 (But YOU should rest. God made the Sabbath for a reason!)", answered: addDays(t, -6) },
        { id: 4, time: "Oct 7, 2026 12:10 PM", name: "Sample Name", question: "If you try to fail and succeed, which one did you actually do?", status: "Approved", answer: "Both?? This one broke our brains. 🧮 Russian math students — please submit a proof.", answered: addDays(t, -2) },
        { id: 5, time: "Oct 7, 2026 1:05 PM", name: "", question: "Is God fair? A person who did many bad things but got saved vs a very good person who is not saved?", status: "Approved", answer: "Great, deep question. Salvation is not a reward for being good — it's a free gift through Christ (Eph. 2:8). God's fairness is that the same gift is offered to everyone. Let's talk more at small group!", answered: addDays(t, -4) }
      ],
      readings: plan.map((p, i) => ({ date: addDays(mon, i), book: p[0], chapter: p[1], note: "" })),
      leaves: (() => {
        const L = [
          [0, true, "The serving ones", "🔥 Burning", "(Sample leaf) Hebrews 12:2 — “looking away unto Jesus.” When school and sports pile up, we can just turn and look at Him!", "Heb. 12:2"],
          [0, false, "", "😊 Joyful", "I finally finished reading Hebrews 11 and it was so good", ""],
          [1, false, "Grace", "🙏 Thankful", "Thankful for small group on Friday 🧋", ""],
          [1, false, "", "🌱 Growing", "Calling on the Lord before my volleyball game really helped", ""],
          [2, false, "J", "🔥 Burning", "By faith Abraham went out not knowing where he was going. That’s me with high school lol", "Heb. 11:8"],
          [3, true, "Brother Tim", "💧 Refreshed", "Singing hymns with all of you on Sunday refreshed me so much.", ""],
          [4, false, "", "🕊️ Peaceful", "God is a rewarder of those who diligently seek Him", "Heb. 11:6"],
          [5, false, "Mia", "💪 Strengthened", "Run with endurance the race!! 🏃‍♀️", "Heb. 12:1"],
          [9, false, "", "🤔 Pondering", "What does it mean that we have a cloud of witnesses?", ""],
          [12, true, "The serving ones", "🙏 Thankful", "We’re thankful for each one of you who came out on Friday!", "Heb. 11:6"]
        ];
        return L.map((x, i) => { const day = addDays(t, -x[0]); return { id: String(new Date(day + "T12:00:00").getTime() - i * 60000), day, so: x[1], name: x[2], feeling: x[3], message: x[4], verse: x[5], url: "", status: "Shown" }; });
      })(),
      quotes: ["(sample) Add real ones in the “YP Quotes” tab", "bro what 💀", "that’s lowkey so real", "I’m so cooked for the math test", "W", "fly high!", "can we get boba after?", "AMEN 🙌", "ok but hear me out"],
      scores: [
        { id: 1, game: "transformed", day: t, reading: "", name: "Fly High 🏐", score: 5, detail: "74" },
        { id: 2, game: "transformed", day: t, reading: "", name: "Matcha Monk", score: 6, detail: "51" },
        { id: 3, game: "overcomers", day: t, reading: "", name: "Boba Bandit", score: 2650, detail: "🌱💎🎈🌟🎈" },
        { id: 4, game: "overcomers", day: addDays(t, -1), reading: "", name: "Fly High 🏐", score: 3100, detail: "💎🌟🎈💎🎈" },
        { id: 5, game: "bubbles", day: t, reading: "", name: "Matcha Monk", score: 41, detail: "" },
        { id: 6, game: "bubbles", day: addDays(t, -2), reading: "", name: "Boba Bandit", score: 47, detail: "" }
      ]
    };
  }
  const DBK = "yp_demo_db_v5";
  const db = () => { let d = store.get(DBK, null); if (!d) { d = seed(); store.set(DBK, d); } return d; };
  const save = d => store.set(DBK, d);

  function mock(p) {
    const d = db();
    switch (p.action) {
      case "public":
        return { ok: true, readings: d.readings, leaves: d.leaves.filter(l => l.status === "Shown").sort((a, b) => b.id - a.id), quotes: d.quotes,
          answers: d.questions.filter(q => q.status === "Approved" && q.answer).sort((a, b) => String(b.answered).localeCompare(String(a.answered)))
            .map(q => ({ id: q.id, question: q.question, answer: q.answer, answered: q.answered })),
          photos: (d.photos || []).filter(x => x.status === "Shown").slice().reverse().slice(0, 6) };
      case "scores": return { ok: true, scores: d.scores };
      case "ask": {
        if (!String(p.question || "").trim()) return { ok: false, error: "Type a question first" };
        const id = Math.max(1, ...d.questions.map(q => q.id)) + 1;
        d.questions.push({ id, time: new Date().toLocaleString(), name: p.anonymous === false ? String(p.name || "").slice(0, 60) : "", question: String(p.question).slice(0, 2000), status: "New", answer: "", answered: "" });
        save(d); return { ok: true };
      }
      case "score": {
        const key = String(p.name).trim().toLowerCase();
        const old = d.scores.find(s => s.game === p.game && s.day === p.day && s.name.toLowerCase() === key);
        const better = !old || (p.game === "transformed" ? (p.score < old.score || (p.score === old.score && +p.detail < +old.detail)) : p.score > old.score);
        if (old && better) Object.assign(old, { score: p.score, detail: p.detail, reading: p.reading });
        if (!old) d.scores.push({ id: Date.now(), game: p.game, day: p.day, reading: p.reading, name: String(p.name).trim().slice(0, 20), score: p.score, detail: p.detail });
        save(d); return { ok: true, improved: better };
      }
      case "list": return { ok: true, items: d.questions.slice().sort((a, b) => b.id - a.id) };
      case "update": {
        const q = d.questions.find(x => x.id === p.id); if (!q) return { ok: false, error: "Not found" };
        q.status = p.status; q.answer = p.answer; if (p.status === "Approved") q.answered = today();
        save(d); return { ok: true };
      }
      case "setReadings":
        d.readings = d.readings.filter(r => !p.dates.includes(r.date)).concat(p.items);
        save(d); return { ok: true };
      case "leaf": case "addLeaf": {
        if (!String(p.message || "").trim()) return { ok: false, error: "Write your enjoyment first" };
        const so = p.action === "addLeaf";
        d.leaves.push({ id: String(Date.now()), day: today(), so, name: String(p.name || "").slice(0, so ? 60 : 30), feeling: p.feeling || "",
          message: String(p.message).slice(0, so ? 3000 : 600), verse: p.verse || "", url: so ? (p.image || "") : "", status: "Shown" });
        save(d); return { ok: true };
      }
      case "allLeaves": return { ok: true, leaves: d.leaves.slice().sort((a, b) => b.id - a.id) };
      case "setLeaf": { const l = d.leaves.find(x => x.id === p.id); if (l) l.status = p.status; save(d); return { ok: true }; }
      case "deleteLeaf": d.leaves = d.leaves.filter(l => l.id !== p.id); save(d); return { ok: true };
      case "deleteScore": d.scores = d.scores.filter(s => s.id !== p.id); save(d); return { ok: true };
      case "servingOnes": return { ok: true, names: ["Sample Serving One", "Another Serving One"] };
      case "allQuotes": return { ok: true, quotes: d.quotes.map((q, i) => ({ row: i + 2, quote: q, show: true })).reverse() };
      case "addQuote": d.quotes.push(String(p.quote).slice(0, 140)); save(d); return { ok: true };
      case "setQuote": return { ok: true };
      case "deleteQuote": d.quotes = d.quotes.filter(q => q !== p.quote); save(d); return { ok: true };
      case "allPhotos": return { ok: true, photos: (d.photos || []).slice().reverse() };
      case "addPhoto": (d.photos = d.photos || []).push({ id: String(Date.now()), url: p.image, caption: p.caption || "", day: today(), status: "Shown" }); save(d); return { ok: true };
      case "setPhoto": { const ph = (d.photos || []).find(x => x.id === p.id); if (ph) ph.status = p.status; save(d); return { ok: true }; }
      case "deletePhoto": d.photos = (d.photos || []).filter(x => x.id !== p.id); save(d); return { ok: true };
      default: return { ok: false, error: "Unknown action" };
    }
  }

  async function call(p, isGet) {
    if (DEMO) {
      await new Promise(r => setTimeout(r, 120));
      const res = mock(JSON.parse(JSON.stringify(p)));
      if (!res.ok) throw new Error(res.error);
      return res;
    }
    const res = isGet
      ? await fetch(CFG.SCRIPT_URL + "?action=" + encodeURIComponent(p.action) + "&t=" + Date.now())
      : await fetch(CFG.SCRIPT_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(p) });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "Something went wrong");
    return data;
  }

  window.API = {
    demo: DEMO, store,
    async public() { const d = await call({ action: "public" }, true); d.readings = (d.readings || []).map(decorate).sort((a, b) => a.date.localeCompare(b.date)); return d; },
    scores: () => call({ action: "scores" }, true),
    post: p => call(p, false),
    week, decorate,
    // the reading(s) for a given day
    readingsFor: (readings, date) => readings.filter(r => r.date === date)
  };
})();
