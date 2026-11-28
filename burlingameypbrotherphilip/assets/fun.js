// Shared fun bits for the YP pages
(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FUN = { reduced };

  FUN.INTERESTS = [
    ["🏐", "Volleyball", "Bump, set, SPIKE!"], ["🏀", "Basketball", "Swish 🔥"], ["🏃", "Running", "Keep running the race!"],
    ["🧮", "Russian Math", "Show your work 📐"], ["🍬", "Candy", "Sugar rush!"], ["🎸", "Guitar", "Strum strum 🎶"],
    ["🥁", "Cajon", "Boom-tak-boom-tak"], ["🤽", "Water Polo", "Splash!"], ["🏐", "Haikyu!!", "Fly high!"],
    ["🧶", "Crochet", "One more row…"], ["🎨", "Drawing & Art", "Masterpiece unlocked"], ["🎵", "Singing Hymns", "Sing it loud!"],
    ["📖", "Reading the Bible", "Pray-read it!"], ["⚽", "Soccer", "GOOOAL!"], ["👟", "Track & Field", "On your marks…"],
    ["🏈", "Football", "Touchdown!"], ["⛸️", "Ice Skating", "Triple axel ✨"], ["🧋", "Boba", "Extra pearls pls"],
    ["🍵", "Matcha", "Matcha moment 🍃"], ["🍭", "Candy", "Lollipop pop!"]
  ];

  // faint margin doodles of every YP interest, on top of the graph paper
  FUN.wallpaper = () => {
    const em = ["🏐","🏀","🏃","🧮","🍬","🎸","🥁","🤽","🧶","🎨","🎵","📖","⚽","👟","🏈","⛸️","🧋","🍵","🍭","🎶"];
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="390" height="390"><filter id="f"><feColorMatrix type="saturate" values="0.35"/></filter><g opacity="0.16" font-size="26" filter="url(#f)">';
    em.forEach((e, i) => {
      const x = 24 + (i % 5) * 78 + (Math.floor(i / 5) % 2) * 34, y = 52 + Math.floor(i / 5) * 96;
      svg += `<text x="${x}" y="${y}" transform="rotate(${(i * 37) % 40 - 20} ${x} ${y})">${e}</text>`;
    });
    svg += "</g></svg>";
    document.body.style.backgroundImage = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
    document.body.style.backgroundSize = "390px 390px";
  };

  // ---------- soft bubble-pop sound (made in the browser, no audio files) ----------
  let actx = null, noiseBuf = null;
  const getSound = () => { try { return localStorage.getItem("yp_sound") !== "off"; } catch (e) { return FUN._sound !== false; } };
  FUN.soundOn = getSound;
  FUN.setSound = on => { FUN._sound = on; try { localStorage.setItem("yp_sound", on ? "on" : "off"); } catch (e) {} };
  // size: bubble width in px — bigger bubbles sound deeper
  FUN.pop = size => {
    if (!getSound()) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      actx = actx || new AC(); if (actx.state === "suspended") actx.resume();
      const t = actx.currentTime + 0.005;
      const big = Math.min(1, Math.max(0, ((size || 70) - 54) / 40));
      const f = (760 - big * 330) * (0.94 + Math.random() * 0.12);
      const out = actx.createGain(); out.gain.value = 0.55;
      const lp = actx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 3200;
      const pan = actx.createStereoPanner ? actx.createStereoPanner() : null;
      if (pan) { pan.pan.value = Math.random() * 0.7 - 0.35; out.connect(lp); lp.connect(pan); pan.connect(actx.destination); }
      else { out.connect(lp); lp.connect(actx.destination); }
      // the round "bloop": a sine that glides up, then fades like a water drop
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = "sine"; o.frequency.setValueAtTime(f * 0.5, t); o.frequency.exponentialRampToValueAtTime(f * 1.55, t + 0.06);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.18);
      // a soft low "thup" underneath
      const o2 = actx.createOscillator(), g2 = actx.createGain();
      o2.type = "sine"; o2.frequency.setValueAtTime(190 - big * 50, t); o2.frequency.exponentialRampToValueAtTime(70, t + 0.09);
      g2.gain.setValueAtTime(0.0001, t); g2.gain.exponentialRampToValueAtTime(0.32, t + 0.004); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
      o2.connect(g2); g2.connect(out); o2.start(t); o2.stop(t + 0.12);
      // the tiny airy "tk" of the film breaking
      if (!noiseBuf) { noiseBuf = actx.createBuffer(1, actx.sampleRate * 0.03, actx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length); }
      const n = actx.createBufferSource(), bp = actx.createBiquadFilter(), g3 = actx.createGain();
      n.buffer = noiseBuf; bp.type = "bandpass"; bp.frequency.value = 2100; bp.Q.value = 0.9; g3.gain.value = 0.09;
      n.connect(bp); bp.connect(g3); g3.connect(out); n.start(t);
    } catch (e) {}
  };

  FUN.ticker = (el, quotes) => {
    if (!el) return;
    quotes = quotes && quotes.length ? quotes : ["Say something the YP always say… 👀"];
    el.innerHTML = "";
    let reps = Math.max(2, Math.ceil(16 / quotes.length) * 2); if (reps % 2) reps++;
    for (let r = 0; r < reps; r++) quotes.forEach(q => { const s = document.createElement("span"); s.textContent = q; el.appendChild(s); });
    el.style.setProperty("--speed", Math.max(30, quotes.join("").length * reps * 0.12) + "s");
  };

  FUN.toast = msg => {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(FUN._t); FUN._t = setTimeout(() => t.classList.remove("show"), 3000);
  };

  FUN.confetti = (items, n) => {
    if (reduced) return;
    items = items || ["🍬","🍭","🧋","🍵","🏐","🏀","⚽","🎵","✨"];
    for (let i = 0; i < (n || 36); i++) {
      const c = document.createElement("div"); c.className = "confetti"; c.textContent = items[i % items.length];
      c.style.left = Math.random() * 100 + "vw"; c.style.animationDuration = 2 + Math.random() * 2 + "s"; c.style.animationDelay = Math.random() * .6 + "s";
      document.body.appendChild(c); setTimeout(() => c.remove(), 5000);
    }
  };

  FUN.copy = async (text, okMsg) => {
    try { await navigator.clipboard.writeText(text); FUN.toast(okMsg || "Copied!"); }
    catch (e) { FUN.toast("Couldn’t copy — screenshot it instead 📸"); }
  };

  // ---------- version 3 extras: little musical sounds + tap sparkles ----------
  const ctx = () => { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; actx = actx || new AC(); if (actx.state === "suspended") actx.resume(); return actx; };
  const SCALE = [0, 2, 4, 7, 9];
  FUN.note = (step, vol) => {            // soft marimba-ish note on a happy five-note scale
    if (!getSound()) return;
    try {
      const c = ctx(); if (!c) return; const t = c.currentTime + 0.005;
      step = Math.max(0, Math.min(14, step | 0));
      const f = 392 * Math.pow(2, (SCALE[step % 5] + 12 * Math.floor(step / 5)) / 12);
      const o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), g2 = c.createGain();
      o.type = "sine"; o.frequency.value = f; o2.type = "triangle"; o2.frequency.value = f * 2; g2.gain.value = 0.15;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
      o.connect(g); o2.connect(g2); g2.connect(g); g.connect(c.destination); o.start(t); o2.start(t); o.stop(t + 0.5); o2.stop(t + 0.5);
    } catch (e) {}
  };
  const sweep = (f1, f2, dur, vol) => {
    if (!getSound()) return;
    try { const c = ctx(); if (!c) return; const t = c.currentTime + 0.003, o = c.createOscillator(), g = c.createGain();
      o.type = "sine"; o.frequency.setValueAtTime(f1, t); o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + 0.02); } catch (e) {}
  };
  FUN.tick = () => sweep(820, 560, 0.04, 0.07);
  FUN.bonk = () => sweep(190, 100, 0.14, 0.22);
  FUN.fanfare = () => [3, 5, 7, 10].forEach((s, i) => setTimeout(() => FUN.note(s, 0.22), i * 120));

  if (!reduced) document.addEventListener("pointerdown", e => {
    if (document.body.classList.contains("calm") || !e.target.closest || e.target.closest("input, textarea, select, dialog, .kb, .bubble, .calm-overlay")) return;
    const bits = ["✨", "🫧", "💚", "⭐"];
    for (let i = 0; i < 4; i++) {
      const s = document.createElement("span"); s.className = "tapspark"; s.textContent = bits[(Math.random() * bits.length) | 0];
      const a = Math.random() * 6.28, d = 24 + Math.random() * 26;
      s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px"; s.style.setProperty("--tx", Math.cos(a) * d + "px"); s.style.setProperty("--ty", Math.sin(a) * d + "px");
      document.body.appendChild(s); setTimeout(() => s.remove(), 600);
    }
  });
  document.addEventListener("click", e => { if (e.target.closest && e.target.closest("footer.site p:first-child")) { FUN.confetti(); FUN.fanfare(); } });

  window.FUN = FUN;
})();
