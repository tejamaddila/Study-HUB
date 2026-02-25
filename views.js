/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB — views.js
   The Paintbrush 🎨 — Dynamically renders every UI component
   Colleges · Departments · Notes · All powered by data.js
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   🏫 RENDER COLLEGES PAGE
   → Paints all college cards into #collegesGrid
───────────────────────────────────────────── */
function renderColleges() {
  const grid = document.getElementById('collegesGrid');
  if (!grid) return;

  grid.innerHTML = COLLEGES.map(college => `
    <div class="college-card" onclick="navigateToDepartment('${college.id}')">
      <div class="college-icon">${college.icon}</div>
      <h3>${college.name}</h3>
      <p>${college.description}</p>
      <div class="college-meta">
        <span>📍 ${college.location}</span>
      </div>
      <div class="college-meta" style="margin-top:8px;">
        <span>🎓 Est. ${college.established}</span>
        <span>🏷️ ${college.type}</span>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────
   🏗️ RENDER DEPARTMENT PAGE
   → Called when a college card is clicked
   → Shows college info + branch tabs + notes
───────────────────────────────────────────── */
function renderDepartment(collegeId) {
  const college = COLLEGES.find(c => c.id === collegeId);
  if (!college) return;

  const content = document.getElementById('departmentContent');
  if (!content) return;

  // Build branch tabs HTML
  const branchTabsHTML = college.branches.map((branchId, index) => {
    const branch = BRANCHES[branchId];
    return `
      <button
        class="branch-tab ${index === 0 ? 'active' : ''}"
        onclick="switchBranch('${collegeId}', '${branchId}', this)"
      >
        ${branch.icon} ${branch.label}
      </button>
    `;
  }).join('');

  // Build college news HTML
  const newsHTML = college.news.map(item => `
    <div class="news-card">
      <span class="news-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="news-meta">📅 ${item.date} &nbsp;·&nbsp; 🏫 ${college.name}</div>
    </div>
  `).join('');

  // Inject full department page HTML
  content.innerHTML = `

    <!-- College Hero Banner -->
    <div class="dept-hero">
      <p class="section-badge" style="background:rgba(255,255,255,0.2); color:#fff;">
        ${college.icon} ${college.type}
      </p>
      <h2>${college.name}</h2>
      <p>📍 ${college.location} &nbsp;·&nbsp; 🎓 Est. ${college.established}</p>
      <p style="margin-top:12px; font-size:1rem;">${college.description}</p>
    </div>

    <!-- College News Strip -->
    <div style="margin-bottom: 48px;">
      <div class="section-header" style="text-align:left; margin-bottom:24px;">
        <p class="section-badge">📰 College News</p>
        <h2>What's Happening at ${college.name}</h2>
      </div>
      <div class="news-grid">
        ${newsHTML}
      </div>
    </div>

    <!-- Branch Tabs -->
    <div class="section-header" style="text-align:left; margin-bottom:16px;">
      <p class="section-badge">📚 Class Notes</p>
      <h2>Pick Your Branch. Start Studying.</h2>
    </div>
    <div class="branch-tabs" id="branchTabs">
      ${branchTabsHTML}
    </div>

    <!-- Notes Grid — loads first branch by default -->
    <div id="notesContainer">
      ${renderNotesHTML(college.branches[0])}
    </div>

  `;
}

/* ─────────────────────────────────────────────
   📝 RENDER NOTES HTML
   → Returns notes grid HTML for a given branch
   → Called on tab switch + initial department load
───────────────────────────────────────────── */
function renderNotesHTML(branchId) {
  const notes = NOTES[branchId];
  const branch = BRANCHES[branchId];

  if (!notes || notes.length === 0) {
    return `
      <div style="text-align:center; padding:64px 24px; color:var(--gray-500);">
        <p style="font-size:3rem;">📭</p>
        <h3 style="color:var(--gray-500); font-size:1.1rem;">Notes coming soon!</h3>
        <p>We're working on it. Check back shortly — it'll be worth the wait.</p>
      </div>
    `;
  }

  // Group notes by subject for clean display
  const grouped = {};
  notes.forEach(note => {
    if (!grouped[note.subject]) grouped[note.subject] = [];
    grouped[note.subject].push(note);
  });

  const subjectsHTML = Object.entries(grouped).map(([subject, subjectNotes]) => `
    <div style="margin-bottom: 40px;">

      <!-- Subject Header -->
      <div style="
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 2px solid var(--line-blue);
      ">
        <span style="
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: 99px;
        ">${branch.icon} ${subject}</span>
      </div>

      <!-- Notes Cards -->
      <div class="notes-grid">
        ${subjectNotes.map(note => `
          <div class="note-card" onclick="window.open('${note.downloadUrl}', '_blank')">
            <div class="note-unit">${note.unit}</div>
            <h3>${note.topic}</h3>
            <p>${note.description}</p>
            <div class="note-footer">
              <span>📄 ${note.pages} &nbsp;·&nbsp; 🗓️ ${note.updated}</span>
              <span class="download-btn">⬇️ Download</span>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `).join('');

  return `
    <!-- Branch Info Banner -->
    <div style="
      background: linear-gradient(135deg, ${branch.color}18, ${branch.color}08);
      border: 1.5px solid ${branch.color}40;
      border-radius: var(--radius-lg);
      padding: 20px 24px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 16px;
    ">
      <span style="font-size: 2rem;">${branch.icon}</span>
      <div>
        <h3 style="color: var(--navy); margin:0 0 4px;">${branch.label}</h3>
        <p style="color: var(--gray-500); font-size: 0.88rem; margin:0;">${branch.description}</p>
      </div>
    </div>

    <!-- Subjects + Notes -->
    ${subjectsHTML}

    <!-- Resources Section -->
    <div style="
      background: var(--white);
      border: 1.5px solid var(--line-blue);
      border-radius: var(--radius-lg);
      padding: 28px;
      margin-top: 16px;
      box-shadow: var(--shadow-sm);
    ">
      <p class="section-badge">📁 Extra Resources</p>
      <h3 style="margin-bottom: 16px;">More Study Material</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
        <div class="note-card" style="cursor:pointer;">
          <div class="note-unit">📋 Important</div>
          <h3>Important Questions</h3>
          <p>Curated question bank — high-yield topics that actually show up in exams.</p>
          <div class="note-footer">
            <span>⬇️ PDF</span>
            <span class="download-btn">Download</span>
          </div>
        </div>
        <div class="note-card" style="cursor:pointer;">
          <div class="note-unit">📜 PYQ</div>
          <h3>Previous Year Papers</h3>
          <p>Last 5 years of question papers. The most underrated prep weapon. Use them.</p>
          <div class="note-footer">
            <span>⬇️ PDF</span>
            <span class="download-btn">Download</span>
          </div>
        </div>
        <div class="note-card" style="cursor:pointer;">
          <div class="note-unit">🚀 Projects</div>
          <h3>Project Ideas & Resources</h3>
          <p>Curated project ideas with references — for mini projects, finals, and beyond.</p>
          <div class="note-footer">
            <span>⬇️ PDF</span>
            <span class="download-btn">Download</span>
          </div>
        </div>
        <div class="note-card" style="cursor:pointer;">
          <div class="note-unit">📖 Reference</div>
          <h3>Recommended Textbooks</h3>
          <p>The exact books your professors recommend — with direct download links.</p>
          <div class="note-footer">
            <span>⬇️ PDF</span>
            <span class="download-btn">Download</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────
   🔀 SWITCH BRANCH TAB
   → Called when user clicks a branch tab
   → Updates active tab + re-renders notes
───────────────────────────────────────────── */
function switchBranch(collegeId, branchId, clickedTab) {
  // Update active tab styling
  const allTabs = document.querySelectorAll('.branch-tab');
  allTabs.forEach(tab => tab.classList.remove('active'));
  clickedTab.classList.add('active');

  // Swap notes content with smooth fade
  const container = document.getElementById('notesContainer');
  if (!container) return;

  container.style.opacity = '0';
  container.style.transform = 'translateY(8px)';
  container.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

  setTimeout(() => {
    container.innerHTML = renderNotesHTML(branchId);
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 250);
}

/* ─────────────────────────────────────────────
   🔍 SEARCH FUNCTIONALITY
   → Searches notes across ALL branches
   → Triggered by search button or Enter key
───────────────────────────────────────────── */
function initSearch() {
  const input  = document.getElementById('searchInput');
  const button = document.querySelector('.search-btn');
  const tags   = document.querySelectorAll('.tag');

  if (!input) return;

  // Search button click
  if (button) {
    button.addEventListener('click', () => executeSearch(input.value));
  }

  // Enter key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') executeSearch(input.value);
  });

  // Quick tag clicks
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      input.value = tag.textContent.trim();
      executeSearch(input.value);
    });
  });
}

function executeSearch(query) {
  if (!query.trim()) return;

  const q = query.toLowerCase().trim();
  const results = [];

  // Search through all branches and all notes
  Object.entries(NOTES).forEach(([branchId, notes]) => {
    const branch = BRANCHES[branchId];
    notes.forEach(note => {
      const searchable = `
        ${note.subject} ${note.topic} ${note.description}
        ${note.unit} ${branchId}
      `.toLowerCase();

      if (searchable.includes(q)) {
        results.push({ ...note, branchId, branch });
      }
    });
  });

  renderSearchResults(query, results);
}

function renderSearchResults(query, results) {
  // Switch to a temporary "search results" view
  showPage('home');

  const homePage = document.getElementById('page-home');
  if (!homePage) return;

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Inject results at the top of home page
  const existingResults = document.getElementById('searchResultsSection');
  if (existingResults) existingResults.remove();

  const resultsHTML = results.length > 0
    ? `
      <div class="notes-grid">
        ${results.map(note => `
          <div class="note-card">
            <div style="display:flex; gap:8px; margin-bottom:8px; flex-wrap:wrap;">
              <div class="note-unit">${note.unit}</div>
              <span style="
                font-size:0.72rem; font-weight:700;
                background: ${note.branch.color}20;
                color: ${note.branch.color};
                padding: 2px 8px; border-radius:99px;
              ">${note.branch.icon} ${note.branch.label}</span>
            </div>
            <h3>${note.topic}</h3>
            <p><strong style="color:var(--accent);">${note.subject}</strong> — ${note.description}</p>
            <div class="note-footer">
              <span>📄 ${note.pages} &nbsp;·&nbsp; 🗓️ ${note.updated}</span>
              <span class="download-btn" onclick="window.open('${note.downloadUrl}','_blank')">⬇️ Download</span>
            </div>
          </div>
        `).join('')}
      </div>
    `
    : `
      <div style="text-align:center; padding:48px; color:var(--gray-500);">
        <p style="font-size:3rem;">🔍</p>
        <h3 style="color:var(--gray-500);">No results for "${query}"</h3>
        <p>Try searching a subject name, unit number, or branch like "CSE", "Thermodynamics", or "Unit 2".</p>
      </div>
    `;

  const section = document.createElement('div');
  section.id = 'searchResultsSection';
  section.style.cssText = `
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;
  `;
  section.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
      <div>
        <p class="section-badge">🔍 Search Results</p>
        <h2 style="margin:0;">${results.length} result${results.length !== 1 ? 's' : ''} for "<em style="color:var(--accent);">${query}</em>"</h2>
      </div>
      <button class="back-btn" onclick="clearSearch()">✕ Clear Search</button>
    </div>
    ${resultsHTML}
  `;

  homePage.insertBefore(section, homePage.firstChild);
}

function clearSearch() {
  const resultsSection = document.getElementById('searchResultsSection');
  if (resultsSection) resultsSection.remove();
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
}

/* ─────────────────────────────────────────────
   📱 NAVBAR — Scroll + Hamburger behaviour
───────────────────────────────────────────── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
    } else {
      navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    }
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
}

/* ─────────────────────────────────────────────
   🖥️ SHOW PAGE — Switch between SPA views
───────────────────────────────────────────── */
function showPage(pageId) {
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(p => p.classList.remove('active'));

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update active nav link
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.route === pageId) link.classList.add('active');
  });

  // Close mobile menu on navigation
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

/* ─────────────────────────────────────────────
   🧭 NAVIGATE TO DEPARTMENT
   → Switches to dept page + renders college data
───────────────────────────────────────────── */
function navigateToDepartment(collegeId) {
  showPage('department');
  renderDepartment(collegeId);

  // Back button wiring
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.onclick = () => showPage('colleges');
  }
}

/* ─────────────────────────────────────────────
   ✨ SCROLL REVEAL ANIMATIONS
   → Cards animate in as you scroll down
───────────────────────────────────────────── */
function initScrollReveal() {
  // Direction presets — each card type gets its own entrance style
  const revealMap = [
    { selector: '.news-card',        dir: 'reveal-up',    stagger: true },
    { selector: '.placement-card',   dir: 'reveal-left',  stagger: true },
    { selector: '.event-card',       dir: 'reveal-up',    stagger: true },
    { selector: '.about-card',       dir: 'reveal-zoom',  stagger: true },
    { selector: '.college-card',     dir: 'reveal-up',    stagger: true },
    { selector: '.feature-card',     dir: 'reveal-flip',  stagger: true },
    { selector: '.testimonial-card', dir: 'reveal-right', stagger: true },
    { selector: '.project-card',     dir: 'reveal-up',    stagger: true },
    { selector: '.resume-card',      dir: 'reveal-zoom',  stagger: true },
    { selector: '.tip-card',         dir: 'reveal-left',  stagger: true },
    { selector: '.contact-info-card',dir: 'reveal-left',  stagger: true },
    { selector: '.section-header',   dir: 'reveal-up',    stagger: false },
    { selector: '.stat',             dir: 'reveal-up',    stagger: true  },
    { selector: '.faq-item',         dir: 'reveal-up',    stagger: true  },
  ];

  const delayClasses = [
    '', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3',
    'reveal-delay-4', 'reveal-delay-5', 'reveal-delay-6'
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

  // Track siblings in same grid for stagger ordering
  const processed = new Set();

  revealMap.forEach(({ selector, dir, stagger }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, i) => {
      if (processed.has(el)) return;
      processed.add(el);

      // Only apply if not already visible
      if (el.classList.contains('reveal-visible')) return;

      el.classList.add('reveal-hidden', dir);

      if (stagger) {
        const delayIdx = Math.min(i % 6, delayClasses.length - 1);
        if (delayClasses[delayIdx]) {
          el.classList.add(delayClasses[delayIdx]);
        }
      }

      observer.observe(el);
    });
  });
}

/* ─────────────────────────────────────────────
   🚀 INIT ALL VIEWS
   → Called once by router.js on page load
───────────────────────────────────────────── */
function initViews() {
  renderColleges();
  initNavbar();
  initSearch();

  // Slight delay so DOM is fully painted before reveal kicks in
  setTimeout(initScrollReveal, 100);
}