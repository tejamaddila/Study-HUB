/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB — views.js  v2.0
   The Paintbrush 🎨 — Premium Dynamic Rendering
   Colleges · Departments · Year/Regulation Tabs · Animations
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   🏫 RENDER COLLEGES PAGE
───────────────────────────────────────────── */
function renderColleges() {
  const grid = document.getElementById('collegesGrid');
  if (!grid) return;

  grid.innerHTML = COLLEGES.map((college, i) => `
    <div class="college-card reveal-hidden reveal-up reveal-delay-${Math.min(i % 6 + 1, 6)}"
         onclick="navigateToDepartment('${college.id}')">
      <div class="college-icon">${college.icon}</div>
      <h3>${college.name}</h3>
      <p>${college.description}</p>
      <div class="college-meta">
        <span>📍 ${college.location}</span>
        <span>🎓 Est. ${college.established}</span>
      </div>
      <div class="college-meta" style="margin-top:8px;">
        <span>🏷️ ${college.type}</span>
        <span>🔗 ${college.affiliation || 'Autonomous'}</span>
      </div>
    </div>
  `).join('');

  setTimeout(initScrollReveal, 60);
}

/* ─────────────────────────────────────────────
   🏗️ RENDER DEPARTMENT PAGE
   → College info + branch tabs + year/regulation tabs + notes
───────────────────────────────────────────── */
function renderDepartment(collegeId) {
  const college = COLLEGES.find(c => c.id === collegeId);
  if (!college) return;

  const content = document.getElementById('departmentContent');
  if (!content) return;

  const branchTabsHTML = college.branches.map((branchId, index) => {
    const branch = BRANCHES[branchId];
    return `
      <button
        class="branch-tab ${index === 0 ? 'active' : ''}"
        onclick="switchBranch('${collegeId}', '${branchId}', this)"
        data-branch="${branchId}"
      >
        ${branch.icon} ${branch.label}
      </button>
    `;
  }).join('');

  const newsHTML = college.news.map(item => `
    <div class="news-card reveal-hidden reveal-up">
      <span class="news-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="news-meta">📅 ${item.date} &nbsp;·&nbsp; 🏫 ${college.name}</div>
    </div>
  `).join('');

  const firstBranch = BRANCHES[college.branches[0]];
  const firstBranchId = college.branches[0];

  content.innerHTML = `
    <!-- College Hero Banner -->
    <div class="dept-hero reveal-hidden reveal-up">
      <div style="position:relative;z-index:1;">
        <p class="section-badge" style="background:rgba(255,255,255,0.18);color:#fff;border-color:rgba(255,255,255,0.25);">
          ${college.icon} ${college.type} · ${college.affiliation || 'Autonomous'}
        </p>
        <h2>${college.name}</h2>
        <p style="margin-top:4px;">📍 ${college.location} &nbsp;·&nbsp; 🎓 Est. ${college.established}</p>
        <p style="margin-top:12px;font-size:1rem;color:rgba(255,255,255,0.82);">${college.description}</p>
      </div>
    </div>

    <!-- College News -->
    <div style="margin-bottom:52px;">
      <div class="section-header" style="text-align:left;margin-bottom:24px;">
        <p class="section-badge">📰 Campus News</p>
        <h2>What's Happening at ${college.name}</h2>
      </div>
      <div class="news-grid">${newsHTML}</div>
    </div>

    <!-- Branch Selector -->
    <div class="section-header" style="text-align:left;margin-bottom:18px;">
      <p class="section-badge">📚 Class Notes</p>
      <h2>Pick Your Branch. Start Studying. 🚀</h2>
    </div>
    <div class="branch-tabs" id="branchTabs">${branchTabsHTML}</div>

    <!-- Dynamic Content Area -->
    <div id="notesContainer">${renderBranchContentHTML(firstBranchId, firstBranch)}</div>
  `;

  setTimeout(initScrollReveal, 100);
}

/* ─────────────────────────────────────────────
   🎯 RENDER BRANCH CONTENT
   → Shows year tabs + regulation selector + notes
───────────────────────────────────────────── */
function renderBranchContentHTML(branchId, branch, activeYear = null, activeReg = null) {
  const notesData = NOTES[branchId];

  // Handle flat array (firstyear) vs year-organized object
  const isFlat = Array.isArray(notesData);

  if (isFlat) {
    const notes = notesData || [];
    return `
      ${renderBranchBanner(branch)}
      ${renderNotesGridHTML(notes, branch)}
      ${renderExtraResources()}
    `;
  }

  if (!notesData || Object.keys(notesData).length === 0) {
    return `
      ${renderBranchBanner(branch)}
      <div style="text-align:center;padding:64px 24px;color:#6b7280;">
        <p style="font-size:3rem;">📭</p>
        <h3 style="color:#6b7280;font-size:1.1rem;">Notes coming soon!</h3>
        <p>We're working hard on it. Check back shortly!</p>
      </div>
    `;
  }

  const years = branch.years || Object.keys(notesData);
  const regulations = branch.regulations || ["R23"];
  const selectedYear = activeYear || years[0];
  const selectedReg  = activeReg  || branch.currentRegulation || regulations[0];

  // Year tabs
  const yearTabsHTML = years.map(year => `
    <button
      class="year-tab ${year === selectedYear ? 'active' : ''}"
      onclick="switchYear('${branchId}', '${year}', this)"
      data-year="${year}"
    >${year}</button>
  `).join('');

  // Regulation tags
  const regTagsHTML = regulations.map(reg => `
    <button
      class="reg-tag ${reg === selectedReg ? 'active' : ''}"
      onclick="switchRegulation('${branchId}', '${reg}', this)"
      data-reg="${reg}"
    >${reg}</button>
  `).join('');

  // Get notes for selected year, filtered by regulation
  const yearNotes = (notesData[selectedYear] || []).filter(note =>
    !note.regulation || note.regulation === selectedReg || activeReg === null
  );

  return `
    ${renderBranchBanner(branch)}

    <!-- Year + Regulation Selector Bar -->
    <div class="year-reg-bar">
      <div class="year-reg-section">
        <span class="year-reg-label">📅 Year</span>
        <div class="year-tabs-row" id="yearTabsRow">
          ${yearTabsHTML}
        </div>
      </div>
      <div class="year-reg-divider"></div>
      <div class="year-reg-section">
        <span class="year-reg-label">📋 Regulation</span>
        <div class="reg-tags-row" id="regTagsRow">
          ${regTagsHTML}
        </div>
      </div>
    </div>

    <!-- Notes Grid -->
    <div id="yearNotesContainer">
      ${yearNotes.length > 0
        ? renderNotesGridHTML(yearNotes, branch)
        : `<div style="text-align:center;padding:48px 24px;color:#6b7280;">
             <p style="font-size:2.5rem;">📭</p>
             <h3 style="color:#6b7280;font-size:1rem;">No notes yet for ${selectedYear} under ${selectedReg}</h3>
             <p style="font-size:0.85rem;">We're uploading soon. Try another year or regulation!</p>
           </div>`
      }
    </div>

    ${renderExtraResources()}
  `;
}

/* ─────────────────────────────────────────────
   🏷️ BRANCH BANNER
───────────────────────────────────────────── */
function renderBranchBanner(branch) {
  return `
    <div class="branch-banner reveal-hidden reveal-up" style="
      background: linear-gradient(135deg, ${branch.color}18, ${branch.color}08);
      border: 1.5px solid ${branch.color}40;
      border-radius: 18px; padding: 22px 28px; margin-bottom: 28px;
      display: flex; align-items: center; gap: 18px;
    ">
      <span style="font-size:2.4rem;">${branch.icon}</span>
      <div>
        <h3 style="color:#0a0f1e;margin:0 0 4px;">${branch.label}</h3>
        <p style="color:#6b7280;font-size:0.86rem;margin:0;line-height:1.5;">${branch.description}</p>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────
   📝 RENDER NOTES GRID HTML
───────────────────────────────────────────── */
function renderNotesGridHTML(notes, branch) {
  if (!notes || notes.length === 0) {
    return `<div style="text-align:center;padding:48px 24px;color:#6b7280;"><p style="font-size:2.5rem;">📭</p><h3 style="color:#6b7280;font-size:1rem;">Notes coming soon!</h3></div>`;
  }

  // Group by subject
  const grouped = {};
  notes.forEach(note => {
    if (!grouped[note.subject]) grouped[note.subject] = [];
    grouped[note.subject].push(note);
  });

  return Object.entries(grouped).map(([subject, subjectNotes]) => `
    <div style="margin-bottom:36px;">
      <div class="subject-header">
        <span class="subject-badge">${branch.icon} ${subject}</span>
      </div>
      <div class="notes-grid">
        ${subjectNotes.map((note, i) => `
          <div class="note-card reveal-hidden reveal-up reveal-delay-${Math.min(i + 1, 4)}"
               onclick="window.open('${note.downloadUrl}', '_blank')">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px;flex-wrap:wrap;">
              <div class="note-unit">${note.unit}</div>
              ${note.regulation ? `<span class="reg-pill">${note.regulation}</span>` : ''}
            </div>
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
}

/* ─────────────────────────────────────────────
   📁 EXTRA RESOURCES SECTION
───────────────────────────────────────────── */
function renderExtraResources() {
  return `
    <div class="extra-resources reveal-hidden reveal-up">
      <p class="section-badge">📁 Extra Resources</p>
      <h3 style="margin-bottom:18px;">More Study Material</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;">
        ${[
          { unit: '📋 Important', title: 'Important Questions', desc: 'Curated high-yield question bank — topics that actually show up in exams.' },
          { unit: '📜 PYQ', title: 'Previous Year Papers', desc: 'Last 5 years of question papers. The most underrated prep weapon.' },
          { unit: '🚀 Projects', title: 'Project Ideas', desc: 'Curated ideas with references for mini-projects and finals.' },
          { unit: '📖 Books', title: 'Recommended Textbooks', desc: 'The exact books professors recommend, with download links.' },
        ].map(r => `
          <div class="note-card" style="cursor:pointer;">
            <div class="note-unit">${r.unit}</div>
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
            <div class="note-footer">
              <span>⬇️ PDF</span>
              <span class="download-btn">Download</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────
   🔀 SWITCH BRANCH TAB
───────────────────────────────────────────── */
function switchBranch(collegeId, branchId, clickedTab) {
  document.querySelectorAll('.branch-tab').forEach(t => t.classList.remove('active'));
  clickedTab.classList.add('active');

  const branch = BRANCHES[branchId];
  const container = document.getElementById('notesContainer');
  if (!container) return;

  animateSwap(container, () => {
    container.innerHTML = renderBranchContentHTML(branchId, branch);
    setTimeout(initScrollReveal, 60);
    initYearRegListeners(branchId, branch);
  });
}

/* ─────────────────────────────────────────────
   📅 SWITCH YEAR TAB
───────────────────────────────────────────── */
function switchYear(branchId, year, clickedBtn) {
  document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
  clickedBtn.classList.add('active');

  const currentReg = document.querySelector('.reg-tag.active')?.dataset.reg
    || BRANCHES[branchId]?.currentRegulation || 'R23';

  const branch = BRANCHES[branchId];
  const notesData = NOTES[branchId];
  if (!notesData || Array.isArray(notesData)) return;

  const yearNotes = (notesData[year] || []).filter(note =>
    !note.regulation || note.regulation === currentReg
  );

  const container = document.getElementById('yearNotesContainer');
  if (!container) return;

  animateSwap(container, () => {
    container.innerHTML = yearNotes.length > 0
      ? renderNotesGridHTML(yearNotes, branch)
      : `<div style="text-align:center;padding:48px 24px;color:#6b7280;">
           <p style="font-size:2.5rem;">📭</p>
           <h3 style="color:#6b7280;font-size:1rem;">No notes yet for ${year} · ${currentReg}</h3>
           <p style="font-size:0.85rem;">Uploading soon — try another combination!</p>
         </div>`;
    setTimeout(initScrollReveal, 60);
  });
}

/* ─────────────────────────────────────────────
   📋 SWITCH REGULATION TAG
───────────────────────────────────────────── */
function switchRegulation(branchId, reg, clickedBtn) {
  document.querySelectorAll('.reg-tag').forEach(t => t.classList.remove('active'));
  clickedBtn.classList.add('active');

  const currentYear = document.querySelector('.year-tab.active')?.dataset.year
    || BRANCHES[branchId]?.years?.[0] || '2nd Year';

  const branch = BRANCHES[branchId];
  const notesData = NOTES[branchId];
  if (!notesData || Array.isArray(notesData)) return;

  const yearNotes = (notesData[currentYear] || []).filter(note =>
    !note.regulation || note.regulation === reg
  );

  const container = document.getElementById('yearNotesContainer');
  if (!container) return;

  animateSwap(container, () => {
    container.innerHTML = yearNotes.length > 0
      ? renderNotesGridHTML(yearNotes, branch)
      : `<div style="text-align:center;padding:48px 24px;color:#6b7280;">
           <p style="font-size:2.5rem;">📭</p>
           <h3 style="color:#6b7280;font-size:1rem;">No notes yet for ${currentYear} · ${reg}</h3>
           <p style="font-size:0.85rem;">Uploading soon — try another combination!</p>
         </div>`;
    setTimeout(initScrollReveal, 60);
  });
}

/* ─────────────────────────────────────────────
   ✨ ANIMATE SWAP — Ink fade transition
───────────────────────────────────────────── */
function animateSwap(el, callback) {
  el.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
  el.style.opacity = '0';
  el.style.transform = 'translateY(10px)';
  setTimeout(() => {
    callback();
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 230);
}

/* ─────────────────────────────────────────────
   🔌 INIT YEAR/REG LISTENERS
───────────────────────────────────────────── */
function initYearRegListeners(branchId, branch) {
  // Already handled via inline onclick — nothing extra needed
}

/* ─────────────────────────────────────────────
   🔍 SEARCH FUNCTIONALITY
───────────────────────────────────────────── */
function initSearch() {
  const input  = document.getElementById('searchInput');
  const button = document.querySelector('.search-btn');
  const tags   = document.querySelectorAll('.tag');

  if (!input) return;
  if (button) button.addEventListener('click', () => executeSearch(input.value));
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') executeSearch(input.value); });
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

  Object.entries(NOTES).forEach(([branchId, branchData]) => {
    const branch = BRANCHES[branchId];
    const allNotes = Array.isArray(branchData)
      ? branchData
      : Object.values(branchData).flat();

    allNotes.forEach(note => {
      const searchable = `${note.subject} ${note.topic} ${note.description} ${note.unit} ${branchId}`.toLowerCase();
      if (searchable.includes(q)) results.push({ ...note, branchId, branch });
    });
  });

  renderSearchResults(query, results);
}

function renderSearchResults(query, results) {
  showPage('home');
  const homePage = document.getElementById('page-home');
  if (!homePage) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const existingResults = document.getElementById('searchResultsSection');
  if (existingResults) existingResults.remove();

  const resultsHTML = results.length > 0
    ? `<div class="notes-grid">${results.map(note => `
        <div class="note-card">
          <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap;">
            <div class="note-unit">${note.unit}</div>
            <span style="font-size:0.7rem;font-weight:700;background:${note.branch.color}20;color:${note.branch.color};padding:2px 8px;border-radius:99px;font-family:'DM Mono',monospace;">${note.branch.icon} ${note.branch.label}</span>
            ${note.regulation ? `<span class="reg-pill">${note.regulation}</span>` : ''}
          </div>
          <h3>${note.topic}</h3>
          <p><strong style="color:#1a56db;">${note.subject}</strong> — ${note.description}</p>
          <div class="note-footer">
            <span>📄 ${note.pages} &nbsp;·&nbsp; 🗓️ ${note.updated}</span>
            <span class="download-btn" onclick="window.open('${note.downloadUrl}','_blank')">⬇️ Download</span>
          </div>
        </div>
      `).join('')}</div>`
    : `<div style="text-align:center;padding:56px;color:#6b7280;">
         <p style="font-size:3rem;">🔍</p>
         <h3 style="color:#6b7280;">No results for "${query}"</h3>
         <p>Try subject name, unit number, or branch like "CSE", "Networks", or "Unit 2".</p>
       </div>`;

  const section = document.createElement('div');
  section.id = 'searchResultsSection';
  section.style.cssText = 'max-width:1200px;margin:0 auto;padding:52px 24px;';
  section.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:14px;">
      <div>
        <p class="section-badge">🔍 Search Results</p>
        <h2 style="margin:0;">${results.length} result${results.length !== 1 ? 's' : ''} for "<em style="color:#1a56db;">${query}</em>"</h2>
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
   📱 NAVBAR — Scroll + Hamburger
───────────────────────────────────────────── */
function initNavbar() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
}

/* ─────────────────────────────────────────────
   🖥️ SHOW PAGE
───────────────────────────────────────────── */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${pageId}`);
  if (target) { target.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.route === pageId) link.classList.add('active');
  });
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

/* ─────────────────────────────────────────────
   🧭 NAVIGATE TO DEPARTMENT
───────────────────────────────────────────── */
function navigateToDepartment(collegeId) {
  showPage('department');
  renderDepartment(collegeId);
  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.onclick = () => navigate('colleges');
}

/* ─────────────────────────────────────────────
   ✨ SCROLL REVEAL ANIMATIONS
───────────────────────────────────────────── */
function initScrollReveal() {
  const revealMap = [
    { selector: '.news-card',         dir: 'reveal-up',    stagger: true },
    { selector: '.placement-card',    dir: 'reveal-left',  stagger: true },
    { selector: '.event-card',        dir: 'reveal-up',    stagger: true },
    { selector: '.college-card',      dir: 'reveal-up',    stagger: true },
    { selector: '.feature-card',      dir: 'reveal-flip',  stagger: true },
    { selector: '.testimonial-card',  dir: 'reveal-right', stagger: true },
    { selector: '.project-card',      dir: 'reveal-up',    stagger: true },
    { selector: '.resume-card',       dir: 'reveal-zoom',  stagger: true },
    { selector: '.tip-card',          dir: 'reveal-left',  stagger: true },
    { selector: '.contact-info-card', dir: 'reveal-left',  stagger: true },
    { selector: '.section-header',    dir: 'reveal-up',    stagger: false },
    { selector: '.stat',              dir: 'reveal-up',    stagger: true },
    { selector: '.faq-item',          dir: 'reveal-up',    stagger: true },
    { selector: '.dept-hero',         dir: 'reveal-up',    stagger: false },
    { selector: '.branch-banner',     dir: 'reveal-up',    stagger: false },
    { selector: '.note-card',         dir: 'reveal-up',    stagger: true },
    { selector: '.extra-resources',   dir: 'reveal-up',    stagger: false },
  ];

  const delayClasses = ['','reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-4','reveal-delay-5','reveal-delay-6'];
  const processed = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealMap.forEach(({ selector, dir, stagger }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (processed.has(el) || el.classList.contains('reveal-visible')) return;
      processed.add(el);
      el.classList.add('reveal-hidden', dir);
      if (stagger) {
        const di = Math.min(i % 6, delayClasses.length - 1);
        if (delayClasses[di]) el.classList.add(delayClasses[di]);
      }
      observer.observe(el);
    });
  });
}

/* ─────────────────────────────────────────────
   🚀 INIT ALL VIEWS
───────────────────────────────────────────── */
function initViews() {
  renderColleges();
  initNavbar();
  initSearch();
  setTimeout(initScrollReveal, 150);
}
