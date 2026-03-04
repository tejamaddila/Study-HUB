/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB — router.js  v2.0
   The Central Nervous System ⚡ — Premium SPA Engine
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   🗺️ ROUTE MAP
───────────────────────────────────────────── */
const ROUTES = {
  home:       'page-home',
  colleges:   'page-colleges',
  department: 'page-department',
  events:     'page-events',
  placements: 'page-placements',
  projects:   'page-projects',
  resumes:    'page-resumes',
  contact:    'page-contact',
};

/* ─────────────────────────────────────────────
   🧭 CORE ROUTER
───────────────────────────────────────────── */
function navigate(route) {
  if (!ROUTES[route]) {
    console.warn(`[TechNotes Router] Unknown route: "${route}" — falling back to home.`);
    route = 'home';
  }

  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

  const target = document.getElementById(ROUTES[route]);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-link, .mobile-link, .footer-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.route === route) link.classList.add('active');
  });

  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');

  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  }

  history.pushState({ route }, '', `#${route}`);
  onRouteChange(route);
}

/* ─────────────────────────────────────────────
   🎯 ROUTE-SPECIFIC HOOKS
───────────────────────────────────────────── */
function onRouteChange(route) {
  switch (route) {
    case 'colleges':
      renderColleges();
      setTimeout(initScrollReveal, 120);
      break;
    case 'home':
      setTimeout(() => { initSearch(); initScrollReveal(); initCounters(); }, 120);
      break;
    case 'events':
    case 'placements':
    case 'resumes':
      setTimeout(initScrollReveal, 120);
      break;
    case 'projects':
      setTimeout(() => { initScrollReveal(); initProjectFilter(); }, 120);
      break;
    case 'contact':
      setTimeout(() => { initScrollReveal(); initContactForm(); }, 120);
      break;
    case 'department':
      break;
  }
}

/* ─────────────────────────────────────────────
   🖱️ GLOBAL CLICK DELEGATOR
───────────────────────────────────────────── */
function initRouter() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-route]');
    if (!target) return;
    e.preventDefault();
    navigate(target.dataset.route);
  });

  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.route) navigate(e.state.route);
    else navigate('home');
  });

  const hashRoute = window.location.hash.replace('#', '');
  const startRoute = ROUTES[hashRoute] ? hashRoute : 'home';
  history.replaceState({ route: startRoute }, '', `#${startRoute}`);
  navigate(startRoute);
}

/* ─────────────────────────────────────────────
   ⌨️ KEYBOARD NAVIGATION
───────────────────────────────────────────── */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'h') { e.preventDefault(); navigate('home'); }
    if (e.altKey && e.key === 'c') { e.preventDefault(); navigate('colleges'); }
    if (e.altKey && e.key === 'e') { e.preventDefault(); navigate('events'); }
    if (e.altKey && e.key === 'p') { e.preventDefault(); navigate('placements'); }
    if (e.altKey && e.key === 'j') { e.preventDefault(); navigate('projects'); }
    if (e.altKey && e.key === 'r') { e.preventDefault(); navigate('resumes'); }
    if (e.altKey && e.key === 'o') { e.preventDefault(); navigate('contact'); }
    if (e.key === 'Escape') {
      const deptPage = document.getElementById('page-department');
      if (deptPage && deptPage.classList.contains('active')) navigate('colleges');
    }
  });
}

/* ─────────────────────────────────────────────
   🌀 PREMIUM INK-DROP LOADER
───────────────────────────────────────────── */
function initLoader() {
  const loader = document.createElement('div');
  loader.id = 'pageLoader';
  loader.style.cssText = `
    position: fixed; inset: 0;
    background: #fdf9f4;
    background-image: repeating-linear-gradient(180deg, transparent 0px, transparent 26px, #b8d4f044 26px, #b8d4f044 28px),
                      linear-gradient(90deg, transparent 0px, transparent 72px, #e8a09a33 72px, #e8a09a33 74px, transparent 74px);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    z-index: 9999;
    transition: opacity 0.6s ease, transform 0.6s ease;
  `;

  loader.innerHTML = `
    <style>
      @keyframes inkDrop {
        0%   { transform: scale(0);   opacity: 1; }
        60%  { transform: scale(1.1); opacity: 0.8; }
        100% { transform: scale(1);   opacity: 0; }
      }
      @keyframes loaderFadeIn {
        from { opacity: 0; transform: translateY(12px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes penWrite {
        0%   { stroke-dashoffset: 200; }
        100% { stroke-dashoffset: 0; }
      }
      #loaderInner {
        text-align: center;
        animation: loaderFadeIn 0.5s ease both;
      }
      .ink-ring {
        position: absolute;
        border-radius: 50%;
        border: 2px solid rgba(26,86,219,0.3);
        animation: inkDrop 1.8s ease-out infinite;
      }
      .bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #1a56db, #7c3aed);
        border-radius: 99px;
        transition: width 0.35s ease;
      }
    </style>

    <div id="loaderInner" style="position:relative;">
      <!-- Ink drop rings -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;">
        <div class="ink-ring" style="width:80px;height:80px;margin:-40px 0 0 -40px;animation-delay:0s;"></div>
        <div class="ink-ring" style="width:120px;height:120px;margin:-60px 0 0 -60px;animation-delay:0.3s;border-color:rgba(26,86,219,0.2);"></div>
        <div class="ink-ring" style="width:160px;height:160px;margin:-80px 0 0 -80px;animation-delay:0.6s;border-color:rgba(26,86,219,0.1);"></div>
      </div>

      <!-- Logo -->
      <div style="font-size:3.6rem;margin-bottom:18px;animation:loaderFadeIn 0.5s ease 0.1s both;position:relative;z-index:1;">📓</div>
      <div style="
        font-family:'Playfair Display',serif;
        font-size:1.8rem; font-weight:900;
        color:#0a0f1e; letter-spacing:-0.03em;
        margin-bottom:8px; position:relative;z-index:1;
        animation:loaderFadeIn 0.5s ease 0.2s both;
      ">TechNotes<span style="color:#1a56db;">Hub</span></div>
      <div style="
        font-family:'DM Sans',sans-serif;
        font-size:0.82rem; color:#6b7280; font-weight:500;
        margin-bottom:28px; position:relative;z-index:1;
        animation:loaderFadeIn 0.5s ease 0.3s both;
      ">Loading your study universe ✨</div>

      <!-- Progress bar -->
      <div style="
        width: 180px; height: 4px;
        background: #e5e7eb; border-radius: 99px; overflow: hidden;
        margin: 0 auto; position:relative;z-index:1;
        animation:loaderFadeIn 0.5s ease 0.4s both;
      ">
        <div id="loaderBar" class="bar-fill" style="width:0%;"></div>
      </div>
    </div>
  `;

  document.body.appendChild(loader);

  let progress = 0;
  const bar = document.getElementById('loaderBar');
  const interval = setInterval(() => {
    progress += Math.random() * 26;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    if (bar) bar.style.width = `${progress}%`;
  }, 110);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transform = 'scale(1.03)';
      setTimeout(() => loader.remove(), 620);
    }, 700);
  });
}

/* ─────────────────────────────────────────────
   🔝 SCROLL TO TOP BUTTON
───────────────────────────────────────────── */
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '↑';
  btn.title = 'Back to top';
  btn.style.cssText = `
    position: fixed; bottom: 28px; right: 28px;
    width: 46px; height: 46px;
    background: linear-gradient(135deg, #1a56db, #1341b8);
    color: #fff; border: none; border-radius: 50%;
    font-size: 1.1rem; font-weight: 700; cursor: pointer;
    box-shadow: 0 4px 18px rgba(26,86,219,0.45);
    opacity: 0; transform: translateY(14px) scale(0.9);
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.2s ease, box-shadow 0.2s ease;
    z-index: 500; display: flex; align-items: center; justify-content: center;
    font-family: 'DM Sans', sans-serif;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0) scale(1)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(14px) scale(0.9)';
    }
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  btn.addEventListener('mouseenter', () => {
    btn.style.background = 'linear-gradient(135deg, #1341b8, #0d2e7d)';
    btn.style.transform = 'translateY(-3px) scale(1.08)';
    btn.style.boxShadow = '0 10px 30px rgba(26,86,219,0.55)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'linear-gradient(135deg, #1a56db, #1341b8)';
    btn.style.transform = 'translateY(0) scale(1)';
    btn.style.boxShadow = '0 4px 18px rgba(26,86,219,0.45)';
  });
}

/* ─────────────────────────────────────────────
   🔬 PROJECT FILTER
───────────────────────────────────────────── */
function initProjectFilter() {
  const filterBtns  = document.querySelectorAll('#page-projects .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter || 'all';
      projectCards.forEach((card, i) => {
        const match = filter === 'all' || card.dataset.branch === filter;
        if (match) {
          card.style.display = '';
          card.style.animation = `fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s both`;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────
   📬 CONTACT FORM
───────────────────────────────────────────── */
function initContactForm() {
  const submitBtn = document.querySelector('.btn-contact-submit');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('#page-contact input, #page-contact textarea');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.borderColor = '#dc2626';
        input.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.12)';
        input.style.animation = 'shake 0.4s ease';
        setTimeout(() => {
          input.style.borderColor = '';
          input.style.boxShadow = '';
          input.style.animation = '';
        }, 2500);
      }
    });

    if (!allFilled) {
      submitBtn.textContent = '⚠️ Please fill all fields';
      setTimeout(() => { submitBtn.textContent = '🚀 Send Message'; }, 2500);
      return;
    }

    submitBtn.textContent = '✅ Sent! We\'ll reply within 24 hours.';
    submitBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = '🚀 Send Message';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      inputs.forEach(input => { input.value = ''; });
      const select = document.querySelector('#page-contact select');
      if (select) select.value = '';
    }, 4000);
  });
}

/* ─────────────────────────────────────────────
   📌 NAVBAR SCROLL EFFECT
───────────────────────────────────────────── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   🔢 COUNTER ANIMATION — Stats
───────────────────────────────────────────── */
function initCounters() {
  const stats = document.querySelectorAll('.stat strong');
  stats.forEach(stat => {
    const target = stat.textContent;
    const numMatch = target.match(/(\d+)/);
    if (!numMatch) return;

    const end = parseInt(numMatch[1]);
    const suffix = target.replace(numMatch[1], '');
    let current = 0;
    const step = end / 40;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      stat.textContent = Math.round(current) + suffix;
      if (current >= end) clearInterval(timer);
    }, 30);
  });
}

/* ─────────────────────────────────────────────
   🖊️ INK CURSOR TRAIL (desktop)
───────────────────────────────────────────── */
function initInkTrail() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.innerWidth < 768) return;

  const dots = [];
  const maxDots = 8;

  for (let i = 0; i < maxDots; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9997;
      width: ${8 - i}px; height: ${8 - i}px;
      border-radius: 50%;
      background: rgba(26,86,219,${0.5 - i * 0.06});
      transform: translate(-50%,-50%);
      transition: opacity 0.3s ease;
      will-change: transform;
    `;
    document.body.appendChild(dot);
    dots.push({ el: dot, x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
  });

  function updateTrail() {
    let x = mouseX, y = mouseY;
    dots.forEach((dot, i) => {
      const prevX = dot.x, prevY = dot.y;
      dot.x = x; dot.y = y;
      dot.el.style.transform = `translate(${dot.x - 4}px, ${dot.y - 4}px)`;
      x = prevX + (dot.x - prevX) * 0.55;
      y = prevY + (dot.y - prevY) * 0.55;
    });
    requestAnimationFrame(updateTrail);
  }
  updateTrail();

  document.addEventListener('mouseleave', () => dots.forEach(d => { d.el.style.opacity = '0'; }));
  document.addEventListener('mouseenter', () => dots.forEach(d => { d.el.style.opacity = '1'; }));
}

/* ─────────────────────────────────────────────
   💥 RIPPLE EFFECT — On card clicks
───────────────────────────────────────────── */
function initRippleEffects() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.college-card, .note-card, .feature-card, .placement-card, .event-card');
    if (!card) return;

    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute; pointer-events: none; z-index: 100;
      width: ${size}px; height: ${size}px;
      left: ${x}px; top: ${y}px;
      border-radius: 50%;
      background: rgba(26,86,219,0.12);
      transform: scale(0);
      animation: rippleOut 0.5s ease-out forwards;
    `;

    if (!card.style.position || card.style.position === 'static') {
      card.style.position = 'relative';
    }
    card.style.overflow = 'hidden';
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 550);
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleOut {
      to { transform: scale(2.5); opacity: 0; }
    }
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%,60% { transform: translateX(-5px); }
      40%,80% { transform: translateX(5px); }
    }
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(20px) scale(0.97); }
      to   { opacity:1; transform:translateY(0) scale(1); }
    }

    /* ── Year Tabs ── */
    .year-reg-bar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      background: rgba(255,255,255,0.9);
      border: 1.5px solid #ddedf8;
      border-radius: 16px;
      padding: 16px 22px;
      margin-bottom: 32px;
      box-shadow: 0 2px 12px rgba(26,86,219,0.07);
    }
    .year-reg-section { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .year-reg-label {
      font-size: 0.72rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em;
      color: #6b7280; white-space: nowrap;
      font-family: 'DM Mono', monospace;
    }
    .year-reg-divider { width: 1px; height: 32px; background: #ddedf8; flex-shrink: 0; }
    .year-tabs-row, .reg-tags-row { display: flex; gap: 8px; flex-wrap: wrap; }
    .year-tab {
      font-size: 0.8rem; font-weight: 600;
      padding: 7px 18px; border-radius: 99px;
      border: 1.5px solid #ddedf8;
      color: #374151; background: rgba(255,255,255,0.95);
      cursor: pointer; transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
      font-family: 'DM Sans', sans-serif;
    }
    .year-tab:hover {
      border-color: #1a56db; color: #1a56db;
      background: #eef3ff; transform: translateY(-2px);
    }
    .year-tab.active {
      background: #1a56db; border-color: #1a56db;
      color: #fff; box-shadow: 0 4px 14px rgba(26,86,219,0.35);
      transform: translateY(-1px);
    }
    .reg-tag {
      font-size: 0.72rem; font-weight: 700;
      padding: 5px 14px; border-radius: 99px;
      border: 1.5px solid #ddedf8;
      color: #6b7280; background: rgba(255,255,255,0.95);
      cursor: pointer; transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
      font-family: 'DM Mono', monospace;
      text-transform: uppercase; letter-spacing: 0.05em;
    }
    .reg-tag:hover {
      border-color: #7c3aed; color: #7c3aed;
      background: #ede9fe; transform: translateY(-2px);
    }
    .reg-tag.active {
      background: #7c3aed; border-color: #7c3aed;
      color: #fff; box-shadow: 0 4px 14px rgba(124,58,237,0.35);
      transform: translateY(-1px);
    }
    .reg-pill {
      font-size: 0.62rem; font-weight: 700;
      padding: 1px 8px; border-radius: 99px;
      background: #ede9fe; color: #7c3aed;
      font-family: 'DM Mono', monospace;
      letter-spacing: 0.04em; text-transform: uppercase;
    }
    .subject-header {
      margin-bottom: 14px; padding-bottom: 12px;
      border-bottom: 2px solid #ddedf8;
      display: flex; align-items: center; gap: 12px;
    }
    .subject-badge {
      display: inline-block;
      background: #eef3ff; color: #1a56db;
      font-size: 0.76rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.07em;
      padding: 4px 14px; border-radius: 99px;
      border: 1.5px solid rgba(26,86,219,0.15);
      font-family: 'DM Mono', monospace;
    }
    .extra-resources {
      background: rgba(255,255,255,0.95);
      border: 1.5px solid #ddedf8;
      border-radius: 18px; padding: 28px;
      margin-top: 20px; box-shadow: 0 2px 12px rgba(26,86,219,0.06);
    }

    /* ── Typing cursor for hero ── */
    .hero-title .cursor {
      display: inline-block;
      width: 3px; height: 0.85em;
      background: #1a56db;
      margin-left: 2px;
      vertical-align: middle;
      animation: cursorBlink 1s step-end infinite;
    }
    @keyframes cursorBlink { 50% { opacity: 0; } }

    /* ── Mobile Year-Reg Bar ── */
    @media (max-width: 600px) {
      .year-reg-bar { flex-direction: column; align-items: flex-start; gap: 12px; padding: 14px 16px; }
      .year-reg-divider { width: 100%; height: 1px; }
    }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   🎬 MASTER INIT — The ignition switch
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initViews();
  initRouter();
  initKeyboardNav();
  initScrollToTop();
  initNavbarScroll();
  initRippleEffects();
  initInkTrail();

  console.log(`
  ╔══════════════════════════════════════════╗
  ║   📓 TechNotes Hub — v2.0 PREMIUM       ║
  ║   Notebook Soul · Premium Animations    ║
  ║   Study smart. Grind different. 🚀      ║
  ╚══════════════════════════════════════════╝
  `);
});
