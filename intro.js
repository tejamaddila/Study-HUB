/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB  ✦  intro.js  — CINEMATIC BLACK HOLE INTRO
   Ultra-smooth, beautiful, professional.

   Phase 1 — VOID        : Deep space, 400 stars shimmer into view
   Phase 2 — AWAKENING   : Black hole slowly materialises, disk forms
   Phase 3 — PULL        : Everything spirals inward, tension builds
   Phase 4 — SUPERNOVA   : Silent white explosion
   Phase 5 — EMERGE      : Logo & tagline rise from light, fade to paper
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─────────────────── CSS ─────────────────── */
  const css = document.createElement('style');
  css.textContent = `
    @keyframes introFadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes introSlideUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
    @keyframes introPulse   { 0%,100%{opacity:.7} 50%{opacity:1} }
    @keyframes introGlow    {
      0%  { text-shadow: 0 0 20px rgba(255,200,80,.6), 0 0 40px rgba(255,140,0,.3); }
      50% { text-shadow: 0 0 50px rgba(255,220,100,1), 0 0 100px rgba(255,160,0,.6), 0 0 160px rgba(255,100,0,.3); }
      100%{ text-shadow: 0 0 20px rgba(255,200,80,.6), 0 0 40px rgba(255,140,0,.3); }
    }

    #tnh-intro {
      position: fixed; inset: 0; z-index: 99999;
      background: #000;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    #tnh-intro canvas {
      position: absolute; inset: 0; width: 100%; height: 100%;
    }

    /* ── Logo ── */
    #il-brand {
      position: relative; z-index: 10;
      text-align: center;
      opacity: 0; pointer-events: none;
    }
    #il-brand.show {
      animation: introFadeIn .1s ease forwards;
    }
    #il-icon {
      display: block; font-size: 5rem; line-height: 1;
      filter: drop-shadow(0 0 24px rgba(255,180,60,.9));
      animation: introPulse 2.4s ease-in-out infinite;
    }
    #il-name {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(2.6rem, 6.5vw, 5rem);
      font-weight: 900; color: #fff;
      letter-spacing: -.03em; line-height: 1;
      margin-top: 14px;
      animation: introGlow 3s ease-in-out infinite;
      opacity: 0;
    }
    #il-name.show { animation: introSlideUp .8s cubic-bezier(.22,1,.36,1) forwards, introGlow 3s ease-in-out 1s infinite; }
    #il-name em   { color: #ffd060; font-style: normal; }
    #il-sub {
      font-family: 'Caveat', cursive;
      font-size: 1.45rem; font-weight: 600;
      color: rgba(255,255,255,.6);
      letter-spacing: .04em; margin-top: 10px;
      opacity: 0;
    }
    #il-sub.show { animation: introSlideUp .8s cubic-bezier(.22,1,.36,1) .18s forwards; }

    /* ── Progress ── */
    #il-bar {
      position: absolute; bottom: 48px; left: 50%;
      transform: translateX(-50%);
      width: min(380px, 78vw); z-index: 10;
      opacity: 0; transition: opacity .6s ease;
    }
    #il-bar.show { opacity: 1; }
    #il-track {
      height: 2px; border-radius: 99px; overflow: hidden;
      background: rgba(255,255,255,.07);
    }
    #il-fill {
      height: 100%; width: 0%; border-radius: 99px;
      background: linear-gradient(90deg, #c06000, #ffa500, #ffd060, #fff8e0);
      box-shadow: 0 0 14px rgba(255,160,40,.85);
      transition: width .055s linear;
    }
    #il-info {
      display: flex; justify-content: space-between;
      margin-top: 10px;
      font-family: 'DM Mono', monospace;
      font-size: .65rem; letter-spacing: .1em;
      text-transform: uppercase; color: rgba(255,255,255,.28);
    }

    /* ── Skip ── */
    #il-skip {
      position: fixed; bottom: 20px; right: 24px; z-index: 100000;
      font-family: 'DM Sans', sans-serif;
      font-size: .73rem; font-weight: 600;
      color: rgba(255,255,255,.2);
      background: transparent;
      border: 1px solid rgba(255,255,255,.1);
      padding: 5px 16px; border-radius: 99px; cursor: pointer;
      opacity: 0; transition: opacity .5s ease, color .25s, border-color .25s;
    }
    #il-skip.in  { opacity: 1; }
    #il-skip:hover { color: #ffd060; border-color: rgba(255,200,60,.4); }

    /* ── White paper flash overlay ── */
    #il-flash {
      position: fixed; inset: 0; z-index: 99998;
      background: #fafaf7; opacity: 0; pointer-events: none;
    }
  `;
  document.head.appendChild(css);

  /* ─────────────────── DOM ─────────────────── */
  const wrap = document.createElement('div');
  wrap.id = 'tnh-intro';
  wrap.innerHTML = `
    <canvas id="il-c"></canvas>
    <div id="il-brand">
      <span id="il-icon">📓</span>
      <div id="il-name">TechNotes<em>Hub</em></div>
      <div id="il-sub">Your B.Tech Study Universe ✨</div>
    </div>
    <div id="il-bar">
      <div id="il-track"><div id="il-fill"></div></div>
      <div id="il-info">
        <span id="il-msg">Awakening the universe...</span>
        <span id="il-pct">0%</span>
      </div>
    </div>
    <button id="il-skip">Skip</button>
  `;
  const flash = document.createElement('div');
  flash.id = 'il-flash';
  document.body.appendChild(flash);
  document.body.appendChild(wrap);
  document.body.style.overflow = 'hidden';

  /* ─────────────────── Canvas ─────────────────── */
  const C = document.getElementById('il-c');
  const ctx = C.getContext('2d');
  let W, H, CX, CY;
  function resize() { W = C.width = innerWidth; H = C.height = innerHeight; CX = W/2; CY = H/2; }
  resize();
  window.addEventListener('resize', resize);

  /* ─────────────────── Helpers ─────────────────── */
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const easeOut3 = t => 1 - Math.pow(1 - t, 3);
  const easeInOut = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;

  /* ─────────────────── Stars ─────────────────── */
  const STARS = Array.from({length: 420}, () => ({
    x: Math.random(), y: Math.random(),
    r: .2 + Math.random() * 1.6,
    baseA: .05 + Math.random() * .7,
    phase: Math.random() * Math.PI * 2,
    spd: .004 + Math.random() * .018,
    born: Math.random() * 120,   // staggered fade-in
    color: ['#ffffff','#ddeeff','#ffeedd','#eeeeff'][Math.floor(Math.random()*4)]
  }));

  /* ─────────────────── Vortex particles ─────────────────── */
  function mkP() {
    const a = Math.random() * Math.PI * 2;
    const d = 110 + Math.random() * Math.min(W, H) * .44;
    return {
      a, d,
      aSpd: .010 + Math.random() * .018,
      dSpd: .4 + Math.random() * 1.2,
      size: .5 + Math.random() * 2.5,
      op: .15 + Math.random() * .7,
      hue: 195 + Math.random() * 55,
      sat: 60 + Math.random() * 30,
      trail: [], born: 0
    };
  }
  const VPARTS = Array.from({length: 340}, mkP);

  /* ─────────────────── Explosion debris ─────────────────── */
  const DEBRIS = [];
  function spawnDebris() {
    const pal = ['#fff','#fff8e0','#ffd060','#ffa040','#ff6020','#80c0ff','#d0a0ff','#a0ffd0'];
    for (let i = 0; i < 280; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = .8 + Math.random() * 14;
      DEBRIS.push({
        x: CX, y: CY,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        size: .5 + Math.random() * 5,
        life: 1, decay: .005 + Math.random() * .01,
        color: pal[Math.floor(Math.random() * pal.length)],
        rot: Math.random() * Math.PI * 2,
        rotV: (Math.random() - .5) * .18,
        rect: Math.random() < .3,
        glow: Math.random() < .4
      });
    }
  }

  /* ─────────────────── State ─────────────────── */
  const PHASES = { VOID:0, AWAKEN:1, PULL:2, NOVA:3, EMERGE:4, DONE:5 };
  let phase = PHASES.VOID;
  let pT = 0;                        // frames in current phase
  let holeR = 0;
  let globalT = 0;                   // total frames
  let raf;

  const DUR = { VOID:80, AWAKEN:120, PULL:170, NOVA:90, EMERGE:120 };

  function nextPhase() { phase++; pT = 0; }

  /* ─────────────────── Progress bar ─────────────────── */
  const barEl  = document.getElementById('il-bar');
  const fill   = document.getElementById('il-fill');
  const pctEl  = document.getElementById('il-pct');
  const msgEl  = document.getElementById('il-msg');
  const brand  = document.getElementById('il-brand');
  const ilName = document.getElementById('il-name');
  const ilSub  = document.getElementById('il-sub');
  const skipBtn = document.getElementById('il-skip');

  const MSGS = ['Awakening the universe...','Forming the black hole...','Bending spacetime...','Gathering your notes...','Almost there...','Welcome! 🌌'];
  let pct = 0, pIv = null;

  function startBar() {
    barEl.classList.add('show');
    pIv = setInterval(() => {
      if (pct >= 100) { clearInterval(pIv); return; }
      pct = Math.min(pct + .9 + Math.random() * 1.8, 99);
      fill.style.width = pct + '%';
      pctEl.textContent = Math.round(pct) + '%';
      msgEl.textContent = MSGS[Math.min(Math.floor(pct / 100 * MSGS.length), MSGS.length-1)];
    }, 52);
  }
  function finishBar() {
    clearInterval(pIv); pct = 100;
    fill.style.width = '100%'; pctEl.textContent = '100%'; msgEl.textContent = 'Welcome! 🌌';
  }

  /* ─────────────────── Exit ─────────────────── */
  let exiting = false;
  function exit() {
    if (exiting) return; exiting = true;
    finishBar();
    phase = PHASES.DONE;
    cancelAnimationFrame(raf);

    // Soft fade — reveal paper world beneath
    flash.style.transition = 'opacity .55s ease';
    flash.style.opacity = '1';
    setTimeout(() => {
      wrap.style.transition = 'opacity .5s ease';
      wrap.style.opacity = '0';
      flash.style.transition = 'opacity 1.1s ease .1s';
      flash.style.opacity = '0';
      setTimeout(() => { wrap.remove(); flash.remove(); document.body.style.overflow = ''; }, 1300);
    }, 400);
  }

  setTimeout(() => skipBtn.classList.add('in'), 1600);
  skipBtn.addEventListener('click', exit);

  /* ─────────────────── DRAW ─────────────────── */

  /* Stars layer */
  function drawStars(alpha = 1) {
    STARS.forEach(s => {
      s.phase += s.spd;
      const age   = clamp((globalT - s.born) / 60, 0, 1);
      const twink = s.baseA + Math.sin(s.phase) * s.baseA * .55;
      const a     = twink * age * alpha;
      if (a <= 0) return;

      const sx = s.x * W, sy = s.y * H;

      // Soft glow on bigger stars
      if (s.r > 1.0) {
        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 5);
        g.addColorStop(0, `rgba(255,255,255,${a * .28})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(sx, sy, s.r * 5, 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = a;
      ctx.fillStyle = s.color;
      ctx.beginPath(); ctx.arc(sx, sy, s.r, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  /* Accretion disk */
  function drawDisk(intensity = 1) {
    for (let ri = 7; ri >= 1; ri--) {
      const wobble = Math.sin(globalT * .04 + ri * .8) * 4;
      const rR = holeR * 1.6 + ri * 28 + wobble;
      const al = (.02 + (7-ri) * .018) * intensity;
      const hue = 200 + ri * 14 + globalT * .3;
      ctx.save();
      ctx.translate(CX, CY);
      ctx.rotate(globalT * .003 * (ri % 2 ? 1 : -1));
      ctx.scale(1, .26);
      // Glow
      const stroke = ctx.createLinearGradient(-rR, 0, rR, 0);
      stroke.addColorStop(0,   `hsla(${hue},90%,70%,0)`);
      stroke.addColorStop(.25, `hsla(${hue},90%,70%,${al*2})`);
      stroke.addColorStop(.5,  `hsla(${hue+20},95%,75%,${al*2.5})`);
      stroke.addColorStop(.75, `hsla(${hue},90%,70%,${al*2})`);
      stroke.addColorStop(1,   `hsla(${hue},90%,70%,0)`);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 14 + ri * 3;
      ctx.beginPath(); ctx.arc(0, 0, rR, 0, Math.PI*2); ctx.stroke();
      ctx.restore();
    }
  }

  /* Lensing aura around hole */
  function drawLensing(intensity = 1) {
    const layers = [
      { r: holeR * 2.8, c: '30,100,220', a: .22 * intensity },
      { r: holeR * 2.0, c: '80,160,255', a: .14 * intensity },
      { r: holeR * 1.4, c: '160,200,255', a: .10 * intensity },
    ];
    layers.forEach(l => {
      const g = ctx.createRadialGradient(CX, CY, holeR * .8, CX, CY, l.r);
      g.addColorStop(0,   `rgba(${l.c},${l.a})`);
      g.addColorStop(.6,  `rgba(${l.c},${l.a * .3})`);
      g.addColorStop(1,   'transparent');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(CX, CY, l.r, 0, Math.PI*2); ctx.fill();
    });
  }

  /* Black hole core */
  function drawHole(opacity = 1) {
    // Core void
    const cg = ctx.createRadialGradient(CX, CY, 0, CX, CY, holeR * 1.05);
    cg.addColorStop(0,   `rgba(0,0,0,${opacity})`);
    cg.addColorStop(.92, `rgba(0,0,0,${opacity})`);
    cg.addColorStop(1,   `rgba(10,20,60,${opacity * .6})`);
    ctx.fillStyle = cg;
    ctx.beginPath(); ctx.arc(CX, CY, holeR * 1.05, 0, Math.PI*2); ctx.fill();

    // Event horizon shimmer
    const pulse = .18 + Math.sin(globalT * .09) * .1;
    ctx.strokeStyle = `rgba(100,180,255,${pulse * opacity})`;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(CX, CY, holeR, 0, Math.PI*2); ctx.stroke();

    ctx.strokeStyle = `rgba(200,230,255,${pulse * .38 * opacity})`;
    ctx.lineWidth = .8;
    ctx.beginPath(); ctx.arc(CX, CY, holeR * .83, 0, Math.PI*2); ctx.stroke();
  }

  /* Vortex particles */
  function drawParticles(strength = 1) {
    VPARTS.forEach(p => {
      p.born++;
      const age = clamp(p.born / 40, 0, 1);
      const accel = 1 + Math.max(0, (1 - p.d / 400)) * 5 * strength;
      p.a += p.aSpd * accel;
      p.d -= p.dSpd * accel * .55;

      const px = CX + Math.cos(p.a) * p.d;
      const py = CY + Math.sin(p.a) * p.d;

      p.trail.push({ x: px, y: py });
      if (p.trail.length > 12) p.trail.shift();
      if (p.d < holeR || p.d < 5) { Object.assign(p, mkP()); return; }

      const fadeIn = easeOut3(age);

      // Trail
      if (p.trail.length > 2) {
        ctx.save();
        ctx.strokeStyle = `hsla(${p.hue},${p.sat}%,72%,1)`;
        ctx.lineWidth = p.size * .45;
        ctx.lineCap = 'round';
        ctx.beginPath();
        p.trail.forEach((pt, i) => {
          ctx.globalAlpha = (i / p.trail.length) * p.op * fadeIn * .42;
          i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();
        ctx.restore();
      }

      // Glow + core
      ctx.save();
      const gg = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3.5);
      gg.addColorStop(0, `hsla(${p.hue},${p.sat}%,82%,${p.op * fadeIn * .5})`);
      gg.addColorStop(1, 'transparent');
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(px, py, p.size * 3.5, 0, Math.PI*2); ctx.fill();

      ctx.globalAlpha = p.op * fadeIn;
      ctx.fillStyle = `hsla(${p.hue},${p.sat}%,88%,1)`;
      ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    });
  }

  /* Supernova shockwaves */
  function drawShockwaves(t) {
    [[1, 9, '96,165,250'], [.72, 4.5, '255,200,80'], [.48, 2.5, '255,120,40']].forEach(([mult, lw, col]) => {
      const sR = t * 18 * mult;
      const sA = clamp(1 - sR / (Math.max(W, H) * .85), 0, 1);
      if (sA <= 0) return;
      ctx.strokeStyle = `rgba(${col},${sA})`;
      ctx.lineWidth   = Math.max(.5, lw - t * .1);
      ctx.beginPath(); ctx.arc(CX, CY, sR, 0, Math.PI*2); ctx.stroke();
    });
  }

  /* ─────────────────── MAIN LOOP ─────────────────── */
  function loop() {
    raf = requestAnimationFrame(loop);
    globalT++; pT++;
    ctx.clearRect(0, 0, W, H);

    /* ════ VOID — stars fade in from nothing ════ */
    if (phase === PHASES.VOID) {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
      const t = easeInOut(clamp(pT / DUR.VOID, 0, 1));
      drawStars(t);
      if (pT >= DUR.VOID) nextPhase();
    }

    /* ════ AWAKEN — hole materialises ════ */
    else if (phase === PHASES.AWAKEN) {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
      const t = easeOut3(clamp(pT / DUR.AWAKEN, 0, 1));
      drawStars(1);

      const tgtR = Math.min(W, H) * .19;
      holeR = lerp(0, tgtR, easeOut3(t));

      drawLensing(t);
      drawDisk(t);
      drawHole(t);
      if (pT >= DUR.AWAKEN) nextPhase();
    }

    /* ════ PULL — particles spiral, hole grows ════ */
    else if (phase === PHASES.PULL) {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
      const t = clamp(pT / DUR.PULL, 0, 1);

      // Stars drift toward hole
      const starPull = easeOut3(t) * .4;
      drawStars(1 - starPull * .5);

      const tgtR = Math.min(W, H) * .22;
      holeR = lerp(Math.min(W, H) * .19, tgtR, easeOut3(t));

      drawLensing(1);
      drawDisk(1);
      drawParticles(1 + t * 1.5);
      drawHole(1);

      if (pT >= DUR.PULL) {
        nextPhase();
        spawnDebris();
        startBar();
      }
    }

    /* ════ NOVA — supernova explosion ════ */
    else if (phase === PHASES.NOVA) {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
      const t = clamp(pT / DUR.NOVA, 0, 1);

      // White flash at t=0
      if (pT <= 4) {
        ctx.fillStyle = `rgba(255,255,255,${1 - pT * .22})`;
        ctx.fillRect(0, 0, W, H);
      }

      drawShockwaves(pT);

      // Debris
      for (let i = DEBRIS.length - 1; i >= 0; i--) {
        const d = DEBRIS[i];
        d.x += d.vx; d.y += d.vy;
        d.vx *= .972; d.vy *= .972; d.vy += .04;
        d.rot += d.rotV; d.life -= d.decay;
        if (d.life <= 0) { DEBRIS.splice(i, 1); continue; }

        ctx.save();
        ctx.globalAlpha = d.life * .82;
        ctx.fillStyle   = d.color;
        ctx.translate(d.x, d.y); ctx.rotate(d.rot);
        if (d.rect) { ctx.fillRect(-d.size, -d.size*.38, d.size*2, d.size*.76); }
        else        { ctx.beginPath(); ctx.arc(0, 0, d.size, 0, Math.PI*2); ctx.fill(); }
        if (d.glow) {
          ctx.globalAlpha = d.life * .3;
          const gg = ctx.createRadialGradient(0,0,0,0,0,d.size*4);
          gg.addColorStop(0, d.color); gg.addColorStop(1, 'transparent');
          ctx.fillStyle = gg;
          ctx.beginPath(); ctx.arc(0, 0, d.size*4, 0, Math.PI*2); ctx.fill();
        }
        ctx.restore();
      }

      // Fading hole
      const hFade = clamp(1 - t * 1.2, 0, 1);
      if (hFade > 0) {
        const cg = ctx.createRadialGradient(CX,CY,0,CX,CY,holeR+80);
        cg.addColorStop(0,  `rgba(0,0,0,${hFade})`);
        cg.addColorStop(.7, `rgba(5,10,35,${hFade*.5})`);
        cg.addColorStop(1,  'transparent');
        ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(CX,CY,holeR+80,0,Math.PI*2); ctx.fill();
      }

      // Show logo at frame 20
      if (pT === 20) {
        brand.classList.add('show');
        brand.style.opacity = '1';
        setTimeout(() => { ilName.classList.add('show'); }, 200);
        setTimeout(() => { ilSub.classList.add('show');  }, 420);
      }

      if (pT >= DUR.NOVA) nextPhase();
    }

    /* ════ EMERGE — debris fades, bg brightens ════ */
    else if (phase === PHASES.EMERGE) {
      pT++;
      const t = easeInOut(clamp(pT / DUR.EMERGE, 0, 1));

      // Fade black → warm white
      const v = Math.round(t * 250);
      ctx.fillStyle = `rgb(${v},${v},${Math.round(t*247)})`;
      ctx.fillRect(0, 0, W, H);

      // Remaining debris
      for (let i = DEBRIS.length-1; i>=0; i--) {
        const d = DEBRIS[i]; d.life -= d.decay * 2.5;
        if (d.life <= 0) { DEBRIS.splice(i,1); continue; }
        ctx.save();
        ctx.globalAlpha = d.life * .25 * (1-t);
        ctx.fillStyle = d.color;
        ctx.beginPath(); ctx.arc(d.x,d.y,d.size,0,Math.PI*2); ctx.fill();
        ctx.restore();
      }

      if (pT >= DUR.EMERGE) exit();
    }
  }
  requestAnimationFrame(loop);

})();
