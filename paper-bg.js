/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB  ✦  paper-bg.js
   CLEAN WHITE PAPER BACKGROUND

   A beautiful, SUBTLE notebook paper texture that sits quietly
   behind the website. Never messy, never distracting.

   What you see:
   • Warm white parchment base (#fafaf6)
   • Very faint blue ruled horizontal lines (like notebook paper)
   • A single delicate red margin line on the left
   • Tiny spiral binding holes along the left edge
   • Gentle paper grain (canvas noise)
   • Slow, barely-visible dust particles floating up
   • Soft ink-wash vignette at corners
   • Absolutely nothing that fights with your content
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── styles ── */
  const st = document.createElement('style');
  st.textContent = `
    #paper-bg {
      position: fixed; inset: 0;
      pointer-events: none; z-index: 0;
      opacity: 0; transition: opacity 1.4s ease;
    }
    #paper-bg.on { opacity: 1; }

    /* Ensure all page content sits above */
    .navbar, main#app, .footer, header, nav {
      position: relative; z-index: 2;
    }
  `;
  document.head.appendChild(st);

  /* ── canvas ── */
  const canvas = document.createElement('canvas');
  canvas.id = 'paper-bg';
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');

  let W, H;
  let noiseCanvas, noiseCtx;

  /* ── pre-baked noise texture ── */
  function buildNoise() {
    noiseCanvas = document.createElement('canvas');
    noiseCanvas.width  = 256;
    noiseCanvas.height = 256;
    noiseCtx = noiseCanvas.getContext('2d');
    const img = noiseCtx.createImageData(256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255 | 0;
      img.data[i]   = v;
      img.data[i+1] = v;
      img.data[i+2] = v;
      img.data[i+3] = Math.random() * 18 | 0;   // very faint
    }
    noiseCtx.putImageData(img, 0, 0);
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); });

  /* ── dust motes ── */
  const DUST = Array.from({length: 28}, () => ({
    x:  Math.random() * 0.9 + 0.05,
    y:  Math.random(),
    r:  0.5 + Math.random() * 1.4,
    vy: -(0.04 + Math.random() * 0.10),   // float upward slowly
    vx: (Math.random() - 0.5) * 0.025,
    a:  0.02 + Math.random() * 0.06,
    phase: Math.random() * Math.PI * 2,
    spd:   0.004 + Math.random() * 0.008,
    sway:  0.0002 + Math.random() * 0.0006
  }));

  /* ── draw static paper layer (baked each resize) ── */
  let staticCanvas, staticCtx;

  function buildStatic() {
    staticCanvas = document.createElement('canvas');
    staticCanvas.width  = W;
    staticCanvas.height = H;
    staticCtx = staticCanvas.getContext('2d');
    const sc  = staticCtx;

    /* Warm paper base */
    sc.fillStyle = '#fafaf6';
    sc.fillRect(0, 0, W, H);

    /* Very subtle warm gradient — slightly darker at edges */
    const bg = sc.createRadialGradient(W*.5, H*.45, 0, W*.5, H*.45, Math.max(W,H)*.72);
    bg.addColorStop(0,   'rgba(255,255,252,0)');
    bg.addColorStop(0.7, 'rgba(240,235,220,0.06)');
    bg.addColorStop(1,   'rgba(210,200,185,0.14)');
    sc.fillStyle = bg;
    sc.fillRect(0, 0, W, H);

    /* ─ Horizontal ruled lines ─ */
    const lineGap = 32;
    sc.strokeStyle = 'rgba(170,200,235,0.30)';
    sc.lineWidth = 0.7;
    for (let y = lineGap; y < H; y += lineGap) {
      sc.beginPath();
      sc.moveTo(0, y);
      sc.lineTo(W, y);
      sc.stroke();
    }

    /* ─ Red margin line ─ */
    const mx = 72;
    sc.strokeStyle = 'rgba(210,100,100,0.22)';
    sc.lineWidth = 1.2;
    sc.beginPath(); sc.moveTo(mx, 0); sc.lineTo(mx, H); sc.stroke();

    /* ─ Spiral holes ─ */
    const holeGap = 32 * 3;                    // every 3 ruled lines
    const holeX   = 28;
    for (let hy = holeGap; hy < H; hy += holeGap) {
      // Hole shadow
      sc.fillStyle = 'rgba(0,0,0,0.06)';
      sc.beginPath(); sc.ellipse(holeX+1, hy+1, 6, 6, 0, 0, Math.PI*2); sc.fill();
      // Hole ring
      sc.strokeStyle = 'rgba(170,200,235,0.45)';
      sc.lineWidth = 1;
      sc.beginPath(); sc.ellipse(holeX, hy, 6, 6, 0, 0, Math.PI*2); sc.stroke();
      // Inner void
      sc.fillStyle = 'rgba(245,242,235,0.9)';
      sc.beginPath(); sc.ellipse(holeX, hy, 4.5, 4.5, 0, 0, Math.PI*2); sc.fill();
    }

    /* ─ Paper grain (noise overlay) ─ */
    if (noiseCanvas) {
      const pattern = sc.createPattern(noiseCanvas, 'repeat');
      sc.globalAlpha = 0.55;
      sc.fillStyle   = pattern;
      sc.fillRect(0, 0, W, H);
      sc.globalAlpha = 1;
    }

    /* ─ Corner vignettes (ink shadows) ─ */
    const corners = [
      [0,0], [W,0], [0,H], [W,H]
    ];
    corners.forEach(([cx,cy]) => {
      const v = sc.createRadialGradient(cx,cy,0,cx,cy,Math.min(W,H)*.55);
      v.addColorStop(0,   'rgba(200,185,160,0.10)');
      v.addColorStop(0.5, 'rgba(200,185,160,0.04)');
      v.addColorStop(1,   'transparent');
      sc.fillStyle = v;
      sc.fillRect(0, 0, W, H);
    });

    /* ─ Top fold line (like a torn page edge) ─ */
    sc.strokeStyle = 'rgba(200,185,160,0.18)';
    sc.lineWidth   = 1;
    sc.setLineDash([]);
    sc.beginPath(); sc.moveTo(0,1); sc.lineTo(W,1); sc.stroke();
  }

  /* ─────────────────── RENDER LOOP ─────────────────── */
  function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, W, H);

    /* Bake static if needed */
    if (!staticCanvas || staticCanvas.width !== W || staticCanvas.height !== H) {
      buildStatic();
    }

    /* Draw baked paper */
    ctx.drawImage(staticCanvas, 0, 0);

    /* Floating dust motes */
    DUST.forEach(d => {
      d.phase += d.spd;
      d.x += d.vx + Math.sin(d.phase) * d.sway;
      d.y += d.vy;

      // Gentle sway
      if (d.x < 0.02 || d.x > 0.98) d.vx *= -1;
      // Reset when floated off top
      if (d.y < -0.02) {
        d.y = 1.02;
        d.x = Math.random() * 0.9 + 0.05;
      }

      const px = d.x * W;
      const py = d.y * H;
      const twink = d.a * (0.5 + Math.sin(d.phase) * 0.5);
      if (twink <= 0) return;

      ctx.save();
      ctx.globalAlpha = twink;
      ctx.fillStyle   = 'rgba(150,130,100,0.8)';
      ctx.beginPath();
      ctx.arc(px, py, d.r, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    });
  }

  /* ─────────────────── INIT ─────────────────── */
  buildNoise();
  buildStatic();
  loop();
  setTimeout(() => canvas.classList.add('on'), 200);

})();
