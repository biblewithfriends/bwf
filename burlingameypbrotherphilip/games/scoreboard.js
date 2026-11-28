// Shared by both games + the high-score page
(() => {
  const { API, DATES } = window;
  const GAMES = {
    transformed: { name: "Transformed", icon: "🦋", lowerBetter: true },
    overcomers: { name: "Overcomers", icon: "🧗", lowerBetter: false },
    bubbles: { name: "Bubble Blitz", icon: "🫧", lowerBetter: false }
  };
  const BAD = ["fuck","shit","bitch","dick","cock","pussy","cunt","slut","whore","nigg","fag","retard","porn","sex","nazi","rape","penis","vagina","boob","titt","anal","asshole","bastard","damn"];
  const clean = s => String(s || "").toLowerCase().replace(/[^a-z]/g, "").replace(/0/g, "o").replace(/1/g, "i").replace(/3/g, "e").replace(/\$/g, "s");
  const fmtTime = s => { s = Math.max(0, Math.round(+s || 0)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };

  const S = {
    GAMES, fmtTime,
    okName: n => { n = String(n || "").trim(); return n.length >= 2 && n.length <= 20 && !BAD.some(b => clean(n).includes(b)); },
    show(game, s) {
      if (game === "transformed") return `${s.score} step${+s.score === 1 ? "" : "s"} · ${fmtTime(s.detail)}`;
      if (game === "bubbles") return `${s.score} bubbles`;
      return `${Number(s.score).toLocaleString()} m`;
    },
    compare(game, a, b) { return game === "transformed" ? (a.score - b.score) || ((+a.detail || 0) - (+b.detail || 0)) : (b.score - a.score); },
    // best entry per name, sorted best first
    best(list, game) {
      const m = new Map();
      list.filter(s => s.game === game).forEach(s => {
        const k = String(s.name).trim().toLowerCase(), o = m.get(k);
        if (!o || S.compare(game, s, o) < 0) m.set(k, s);
      });
      return [...m.values()].sort((a, b) => S.compare(game, a, b));
    },
    // days that have a reading this week, up to today (or today alone with no reading)
    days(readings) {
      const T = DATES.today();
      const out = API.week(readings).filter(d => d.date <= T && d.readings.length).map(d => ({ date: d.date, ref: d.readings[0].ref, link: d.readings[0].link }));
      if (!out.some(d => d.date === T)) out.push({ date: T, ref: null, link: window.BIBLE.BASE });
      return out;
    },
    myName: () => API.store.get("yp_score_name", ""),

    mountSave(el, o) {
      const doneKey = "yp_scored_" + o.game + "_" + o.day;
      el.innerHTML = "";
      el.className = "savebox";
      const h = document.createElement("h4"); h.textContent = "🏆 Put your name on the high-score board";
      const row = document.createElement("div"); row.className = "save-row";
      const inp = document.createElement("input"); inp.maxLength = 20; inp.placeholder = "Nickname (2–20 letters)"; inp.value = S.myName();
      inp.setAttribute("aria-label", "Your nickname for the high scores");
      const btn = document.createElement("button"); btn.type = "button"; btn.className = "btn green"; btn.textContent = "Save";
      const err = document.createElement("p"); err.className = "save-err";
      const board = document.createElement("ol"); board.className = "mini-board";
      const link = document.createElement("a"); link.href = (o.scoresHref || "scores.html") + "?game=" + o.game; link.className = "save-link"; link.textContent = "See all high scores →";
      row.append(inp, btn);
      el.append(h, row, err, board, link);

      async function showBoard(highlight) {
        try {
          const d = await API.scores();
          const top = S.best(d.scores.filter(s => s.day === o.day), o.game).slice(0, 5);
          board.innerHTML = "";
          if (!top.length) { board.innerHTML = "<li>No scores yet today — you could be #1!</li>"; return; }
          top.forEach((s, i) => {
            const li = document.createElement("li");
            if (highlight && s.name.toLowerCase() === highlight.toLowerCase()) li.className = "me";
            li.textContent = ["🥇", "🥈", "🥉", "4.", "5."][i] + " " + s.name + " — " + S.show(o.game, s);
            board.appendChild(li);
          });
        } catch (e) { board.innerHTML = ""; }
      }

      const already = o.repeat ? null : API.store.get(doneKey, null);
      if (already) { row.hidden = true; h.textContent = "🏆 Saved as " + already + " — today’s top 5"; showBoard(already); return; }
      showBoard(null);

      async function save() {
        const n = inp.value.trim();
        err.textContent = "";
        if (!S.okName(n)) { err.textContent = "Pick a kind nickname, 2–20 letters 🙂"; return; }
        btn.disabled = true; btn.textContent = "Saving…";
        try {
          await API.post({ action: "score", game: o.game, day: o.day, reading: o.reading || "", name: n, score: o.score, detail: String(o.detail || "") });
          API.store.set("yp_score_name", n); if (!o.repeat) API.store.set(doneKey, n);
          row.hidden = true; h.textContent = "🏆 Saved as " + n + " — today’s top 5";
          window.FUN && FUN.toast("Saved to the high scores! 🏆");
          showBoard(n);
        } catch (e) { err.textContent = "Couldn’t save: " + e.message; btn.disabled = false; btn.textContent = "Save"; }
      }
      btn.onclick = save;
      inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); save(); } });
    }
  };

  const css = document.createElement("style");
  css.textContent = `.savebox{background:var(--note-yellow);border:0;border-radius:22px;padding:16px;margin-top:14px;text-align:left;color:var(--ink)}
  .savebox h4{margin:0 0 10px;font:400 1.25rem var(--font-display)}
  .save-row{display:flex;gap:8px}.save-row input{flex:1;min-width:0}
  .save-err{color:#2cba8e;font-weight:800;margin:6px 0 0;min-height:1em;font-size:.9rem}
  .mini-board{list-style:none;padding:0;margin:8px 0;display:grid;gap:4px}
  .mini-board li{font-weight:700;background:#ffffff;border-radius:12px;padding:5px 10px}
  .mini-board li.me{background:var(--yellow)}
  .save-link{font-weight:900}`;
  document.head.appendChild(css);
  window.SCORES = S;
})();
