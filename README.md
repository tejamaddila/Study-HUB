# 📓 TechNotes Hub — v1.0.0
> *Your B.Tech study universe. Clean. Fast. Yours.*

![Made with Vanilla JS](https://img.shields.io/badge/Built%20With-Vanilla%20JS-f7df1e?style=flat-square&logo=javascript)
![No Framework](https://img.shields.io/badge/Framework-None%20%F0%9F%94%A5-2563eb?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-10b981?style=flat-square)

---

## 🗂️ Your File Structure

Make sure your folder looks **exactly** like this before opening in a browser:
```
technotes-hub/
│
├── index.html      ← The shell. The skeleton. The entry point.
├── styles.css      ← All the visual magic. Notebook aesthetic lives here.
├── data.js         ← Your content brain. Edit this the most.
├── views.js        ← Dynamic UI renderer. Paints everything on screen.
├── router.js       ← SPA nervous system. Wires every click + transition.
└── README.md       ← You're reading it. The cheat sheet. 📋
```

> ✅ Zero dependencies. Zero installs. Zero build steps.
> Just open `index.html` in your browser and it's **alive.**

---

## 🚀 How to Launch It

### Option 1 — Instant (Recommended)
Install the **Live Server** extension in VS Code.
Right-click `index.html` → **"Open with Live Server"**
Done. It hot-reloads every time you save. 🔥

### Option 2 — Just double-click
Find `index.html` in your folder → double-click it.
Opens straight in your browser. No setup needed.

### Option 3 — Deploy it live (Free)
| Platform | Steps |
|----------|-------|
| **Netlify** | Drag your `technotes-hub` folder onto netlify.com/drop |
| **Vercel** | `npx vercel` in the folder → follow prompts |
| **GitHub Pages** | Push to GitHub → Settings → Pages → Deploy from main |

Your site goes live in under **60 seconds.** No cap. 🌐

---

## ✏️ Customization Guide

### 🏫 Add or Edit a College
Open `data.js` → find the `COLLEGES` array → copy any existing college block and edit:
```javascript
{
  id: "your-college-id",          // ← unique, lowercase, no spaces
  name: "Your College Name",
  location: "City, State",
  icon: "🎓",                     // ← any emoji works
  established: "1995",
  type: "Private Autonomous",
  description: "One punchy line about your college.",
  branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
  news: [
    {
      title: "Your news headline here",
      date: "Nov 2025",
      tag: "📢 Notice",
      description: "A short description of the news item."
    }
  ]
}
```

> 💡 The `id` must be unique. Use kebab-case like `anna-university` or `my-college`.

---

### 📝 Add Real Notes / PDF Links
Open `data.js` → find the `NOTES` object → pick your branch → add a note:
```javascript
{
  unit: "Unit 1",
  subject: "Data Structures & Algorithms",
  topic: "Your Topic Name Here",
  description: "Short, punchy description of what this note covers.",
  pages: "40 pages",
  updated: "Nov 2025",
  downloadUrl: "https://drive.google.com/your-real-link-here"
  //             ↑ Replace # with your actual Google Drive / PDF link
}
```

**How to get a Google Drive link:**
1. Upload your PDF to Google Drive
2. Right-click → **Share** → **Anyone with the link**
3. Click **Copy link**
4. Paste it as the `downloadUrl` value ✅

---

### 🎨 Change the Color Accent
Open `styles.css` → find `:root` at the very top → edit these three lines:
```css
--accent:       #2563eb;   /* Main blue — change to any HEX color */
--accent-light: #eff6ff;   /* Light tint — keep it ~90% lighter    */
--accent-dark:  #1d4ed8;   /* Dark shade — keep it ~20% darker     */
```

**Some fire color combos to try:**
| Vibe | `--accent` | `--accent-light` | `--accent-dark` |
|------|------------|------------------|-----------------|
| 🔥 Red Energy | `#dc2626` | `#fef2f2` | `#b91c1c` |
| 💜 Purple Wave | `#7c3aed` | `#f5f3ff` | `#6d28d9` |
| 🌿 Green Focus | `#059669` | `#ecfdf5` | `#047857` |
| 🌸 Pink Mode | `#db2777` | `#fdf2f8` | `#be185d` |
| 🖤 Midnight | `#0f172a` | `#f8fafc` | `#020617` |

---

### 📏 Change Notebook Line Color
Open `styles.css` → find these two lines inside `:root`:
```css
--line-blue:  #c5d8f0;   /* The horizontal ruled lines color */
--margin-red: #f28b82;   /* The vertical red margin line     */
```

Change `--line-blue` to any soft pastel for a different notebook vibe. 🎨

---

### ➕ Add a New Branch
Open `data.js` → find the `BRANCHES` object → add yours:
```javascript
ece: {
  id: "ece",
  label: "Electronics & Communication (ECE)",
  icon: "📡",
  description: "Signals, systems, and the invisible language of machines.",
  color: "#8b5cf6"
}
```

Then add `"ece"` to the `branches` array of whichever colleges offer it.
Then add an `ece` key inside the `NOTES` object with its notes array.

---

### 🗞️ Update News / Placements / Events
All the home page content lives directly in `index.html`.
Search for these comments and edit the HTML blocks below them:
```
<!-- LATEST NEWS -->        ← Edit news cards here
<!-- PLACEMENT UPDATES -->  ← Edit company cards here
<!-- TECH EVENTS -->        ← Edit event cards here
```

Each card follows the same pattern — just duplicate, paste, and edit. Easy. ✅

---

## ⌨️ Keyboard Shortcuts

Built-in. No extra setup needed.

| Shortcut | Action |
|----------|--------|
| `Alt + H` | 🏠 Go to Home |
| `Alt + C` | 🏫 Go to Colleges |
| `Alt + E` | 🎉 Go to Events |
| `Alt + P` | 💼 Go to Placements |
| `Escape`  | ← Back to Colleges from Department view |

---

## 🔍 How Search Works

The search bar on the Home page scans **every note** across **every branch** in real time.

It matches against:
- Subject name (e.g. `"DBMS"`)
- Topic name (e.g. `"Normalization"`)
- Unit number (e.g. `"Unit 3"`)
- Branch name (e.g. `"CSE"`)
- Description text

Click any **quick tag** below the search bar to auto-fill and search instantly.
Hit **Escape** or **✕ Clear Search** to go back to normal. 🔎

---

## 🌐 Browser Support

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Perfect |
| Firefox 88+ | ✅ Perfect |
| Safari 14+ | ✅ Perfect |
| Edge 90+ | ✅ Perfect |
| IE 11 | ❌ Don't even try |

---

## 📁 Where Everything Lives — Quick Reference

| I want to... | Open this file | Find this... |
|---|---|---|
| Add a college | `data.js` | `COLLEGES` array |
| Add notes / PDFs | `data.js` | `NOTES` object |
| Add a branch | `data.js` | `BRANCHES` object |
| Change colors | `styles.css` | `:root` variables |
| Change fonts | `styles.css` | `--font-head` / `--font-body` |
| Edit navbar links | `index.html` | `<nav>` section |
| Edit home page content | `index.html` | `#page-home` section |
| Edit footer | `index.html` | `<footer>` section |
| Add a new page/route | `router.js` | `ROUTES` object |
| Change loader text | `router.js` | `initLoader()` function |

---

## 🐛 Troubleshooting

**Page is blank / nothing loads**
→ Make sure all 5 files are in the **same folder**
→ Check filenames are exactly: `data.js` `views.js` `router.js` `styles.css`
→ Open browser DevTools (`F12`) → Console tab → read the error

**Styles aren't applying**
→ Confirm `<link rel="stylesheet" href="styles.css">` is in your `index.html` head
→ Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

**Notes not showing on department page**
→ Check that the branch `id` in `COLLEGES.branches[]` exactly matches the key in `NOTES`
→ E.g. `"cse"` in branches must match `cse:` in NOTES — case sensitive ⚠️

**Search returns nothing**
→ Try broader terms — `"data"` instead of `"data structures unit 2 arrays"`
→ Check your `NOTES` entries have filled `subject`, `topic`, `description` fields

**Download button does nothing**
→ Your `downloadUrl` is still set to `"#"` — replace with a real Google Drive link

---

## ✨ What's Next — Ideas to Level Up

Once the base is solid, here's what you can build on top:

- 🔐 **Firebase Auth** — let students log in and bookmark notes
- 📊 **Analytics** — track which notes get downloaded most
- 💬 **Comment Section** — let students ask questions under each note
- 🌙 **Dark Mode** — toggle between light notebook and dark mode
- 📱 **PWA** — make it installable like an app on mobile
- 🔔 **Push Notifications** — alert students when new notes drop
- 🤖 **AI Study Assistant** — embed a Claude-powered chat for doubt solving

---

## 🙌 Credits

Built with nothing but:
- **HTML5** — structure
- **CSS3** — the notebook aesthetic magic
- **Vanilla JavaScript** — all the SPA logic, zero frameworks
- **Google Fonts** — Poppins + Inter + JetBrains Mono
- **Late nights + caffeine** ☕

---

*Made for students, by students. Go build something incredible. 🚀*
```

---

## 🎉 YOUR PLATFORM IS COMPLETE.

Here's your full file checklist — make sure all 6 exist in `technotes-hub/`:
```
✅ index.html
✅ styles.css
✅ data.js
✅ views.js
✅ router.js
✅ README.md