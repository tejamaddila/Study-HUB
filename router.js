/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB — router.js
   The Central Nervous System ⚡ — Wires every click, every page,
   every transition into one seamless, living SPA experience.
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   🗺️ ROUTE MAP
   → Every valid route the SPA understands
   → Add new pages here if you expand later
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
   → Reads the clicked data-route attribute
   → Fires the right page into view
───────────────────────────────────────────── */
function navigate(route) {
  if (!ROUTES[route]) {
    console.warn(`[TechNotes Router] Unknown route: "${route}" — falling back to home.`);
    route = 'home';
  }

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show target page
  const target = document.getElementById(ROUTES[route]);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Sync active state on all nav links
  document.querySelectorAll('.nav-link, .mobile-link, .footer-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.route === route) link.classList.add('active');
  });

  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');

  // Reset hamburger icon
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => s.style.transform = '');
    if (spans[1]) spans[1].style.opacity = '';
  }

  // Push to browser history so back button works
  history.pushState({ route }, '', `#${route}`);

  // Run any route-specific logic
  onRouteChange(route);
}

/* ─────────────────────────────────────────────
   🎯 ROUTE-SPECIFIC HOOKS
   → Runs special logic when certain pages load
───────────────────────────────────────────── */
function onRouteChange(route) {
  switch (route) {

    case 'colleges':
      // Re-render colleges grid every time (in case data changes)
      renderColleges();
      // Trigger scroll reveal for newly painted cards
      setTimeout(initScrollReveal, 100);
      break;

    case 'home':
      // Re-init search + scroll reveal on home
      setTimeout(() => {
        initSearch();
        initScrollReveal();
      }, 100);
      break;

    case 'events':
      setTimeout(initScrollReveal, 100);
      break;

    case 'placements':
      setTimeout(initScrollReveal, 100);
      break;

    case 'projects':
      setTimeout(() => {
        initScrollReveal();
        initProjectFilter();
      }, 100);
      break;

    case 'resumes':
      setTimeout(initScrollReveal, 100);
      break;

    case 'contact':
      setTimeout(() => {
        initScrollReveal();
        initContactForm();
      }, 100);
      break;

    case 'department':
      // Department is handled by navigateToDepartment()
      // Nothing extra needed here
      break;
  }
}

/* ─────────────────────────────────────────────
   🖱️ GLOBAL CLICK DELEGATOR
   → One listener handles ALL navigation clicks
   → Catches data-route on any element anywhere
───────────────────────────────────────────── */
function initRouter() {
  document.addEventListener('click', (e) => {
    // Walk up the DOM tree to find a data-route attribute
    const target = e.target.closest('[data-route]');
    if (!target) return;

    e.preventDefault();
    const route = target.dataset.route;
    navigate(route);
  });

  // Handle browser back / forward buttons
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.route) {
      navigate(e.state.route);
    } else {
      navigate('home');
    }
  });

  // Read URL hash on first load
  // e.g. if user bookmarked /#colleges — go straight there
  const hashRoute = window.location.hash.replace('#', '');
  const startRoute = ROUTES[hashRoute] ? hashRoute : 'home';

  // Set initial history state
  history.replaceState({ route: startRoute }, '', `#${startRoute}`);

  // Fire the initial route
  navigate(startRoute);
}

/* ─────────────────────────────────────────────
   ⌨️ KEYBOARD NAVIGATION
   → Accessibility — navigate with keyboard shortcuts
───────────────────────────────────────────── */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Alt + H → Home
    if (e.altKey && e.key === 'h') { e.preventDefault(); navigate('home'); }
    // Alt + C → Colleges
    if (e.altKey && e.key === 'c') { e.preventDefault(); navigate('colleges'); }
    // Alt + E → Events
    if (e.altKey && e.key === 'e') { e.preventDefault(); navigate('events'); }
    // Alt + P → Placements
    if (e.altKey && e.key === 'p') { e.preventDefault(); navigate('placements'); }
    // Alt + J → Projects
    if (e.altKey && e.key === 'j') { e.preventDefault(); navigate('projects'); }
    // Alt + R → Resumes
    if (e.altKey && e.key === 'r') { e.preventDefault(); navigate('resumes'); }
    // Alt + O → Contact
    if (e.altKey && e.key === 'o') { e.preventDefault(); navigate('contact'); }
    // Escape → back to home from any inner page
    if (e.key === 'Escape') {
      const deptPage = document.getElementById('page-department');
      if (deptPage && deptPage.classList.contains('active')) {
        navigate('colleges');
      }
    }
  });
}

/* ─────────────────────────────────────────────
   🌀 PAGE LOADER
   → Smooth splash screen on first visit
───────────────────────────────────────────── */
function initLoader() {
  // Create loader overlay
  const loader = document.createElement('div');
  loader.id = 'pageLoader';
  loader.style.cssText = `
    position: fixed;
    inset: 0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease, transform 0.5s ease;
    background-image: repeating-linear-gradient(
      180deg,
      transparent 0px,
      transparent 27px,
      #c5d8f0 27px,
      #c5d8f0 28px
    );
  `;

  loader.innerHTML = `
    <div style="text-align:center; animation: loaderPulse 1.5s ease-in-out infinite;">
      <div style="font-size: 3.5rem; margin-bottom: 16px;">📓</div>
      <div style="
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        font-weight: 800;
        color: #0f172a;
        letter-spacing: -0.02em;
        margin-bottom: 8px;
      ">TechNotes<span style="color:#2563eb;">Hub</span></div>
      <div style="
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        color: #6b7280;
        font-weight: 500;
      ">Loading your study universe...</div>
      <div style="
        margin-top: 24px;
        width: 48px;
        height: 4px;
        background: #e5e7eb;
        border-radius: 99px;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
      ">
        <div id="loaderBar" style="
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #2563eb, #1d4ed8);
          border-radius: 99px;
          transition: width 0.4s ease;
        "></div>
      </div>
    </div>
    <style>
      @keyframes loaderPulse {
        0%, 100% { transform: scale(1);   opacity: 1;   }
        50%       { transform: scale(1.04); opacity: 0.85; }
      }
    </style>
  `;

  document.body.appendChild(loader);

  // Animate the progress bar
  let progress = 0;
  const bar = document.getElementById('loaderBar');
  const interval = setInterval(() => {
    progress += Math.random() * 28;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    if (bar) bar.style.width = `${progress}%`;
  }, 120);

  // Dismiss loader once everything is ready
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transform = 'scale(1.02)';
      setTimeout(() => loader.remove(), 500);
    }, 600);
  });
}

/* ─────────────────────────────────────────────
   🔝 SCROLL TO TOP BUTTON
   → Appears after scrolling 400px down
───────────────────────────────────────────── */
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '↑';
  btn.title = 'Back to top';
  btn.style.cssText = `
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 44px;
    height: 44px;
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(37,99,235,0.4);
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(12px)';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.background = '#1d4ed8';
    btn.style.transform = 'translateY(-2px)';
    btn.style.boxShadow = '0 8px 24px rgba(37,99,235,0.5)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.background = '#2563eb';
    btn.style.transform = 'translateY(0)';
    btn.style.boxShadow = '0 4px 16px rgba(37,99,235,0.4)';
  });
}

/* ─────────────────────────────────────────────
   🔬 PROJECT FILTER
   → Filter project cards by branch
───────────────────────────────────────────── */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('#page-projects .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter || 'all';

      projectCards.forEach(card => {
        const branch = card.dataset.branch;
        if (filter === 'all' || branch === filter) {
          card.style.display = '';
          card.style.animation = 'fadeUp 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────
   📬 CONTACT FORM
   → Simple submit handler with success feedback
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
        input.style.borderColor = '#ef4444';
        input.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.1)';
        setTimeout(() => {
          input.style.borderColor = '';
          input.style.boxShadow = '';
        }, 2000);
      }
    });

    if (!allFilled) {
      submitBtn.textContent = '⚠️ Please fill all fields';
      setTimeout(() => { submitBtn.textContent = '🚀 Send Message'; }, 2000);
      return;
    }

    // Success state
    submitBtn.textContent = '✅ Message Sent! We\'ll reply within 24 hours.';
    submitBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
    submitBtn.disabled = true;

    // Reset after 4 seconds
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
   → Adds .scrolled class after 20px scroll
───────────────────────────────────────────── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   🎬 MASTER INIT — The ignition switch
   → Everything boots from right here
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Splash loader — first thing the user sees
  initLoader();

  // 2. Boot all views (colleges grid, navbar, search)
  initViews();

  // 3. Start the router — wire all navigation
  initRouter();

  // 4. Keyboard shortcuts
  initKeyboardNav();

  // 5. Scroll-to-top floating button
  initScrollToTop();

  // 6. Navbar scroll effect
  initNavbarScroll();

  console.log(`
  ╔══════════════════════════════════════╗
  ║   📓 TechNotes Hub — v1.0.0         ║
  ║   Built with Vanilla JS · No BS     ║
  ║   Study smart. Grind different. 🚀  ║
  ╚══════════════════════════════════════╝
  `);
});