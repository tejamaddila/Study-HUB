/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB — data.js
   The Brain 🧠 — Edit all your real content right here.
   Colleges · Branches · Notes · News · Events · Placements
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   🏫 COLLEGES DATA
   → Add / remove colleges here freely
───────────────────────────────────────────── */
const COLLEGES = [
  {
    id: "anna-university",
    name: "Anna University",
    location: "Chennai, Tamil Nadu",
    icon: "🏛️",
    established: "1978",
    type: "Government Autonomous",
    description: "Premier state technical university — the gold standard of Tamil Nadu engineering education.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "Revised Exam Schedule Released for Nov–Dec 2025",
        date: "Nov 10, 2025",
        tag: "🔥 Breaking",
        description: "Official updated timetables for all UG programs are out. Download your hall ticket immediately from the student portal."
      },
      {
        title: "TechSympo 2026 Registrations Now Open",
        date: "Nov 5, 2025",
        tag: "📢 Event",
        description: "National technical symposium accepting paper presentations from all branches. Free entry. Big prizes."
      },
      {
        title: "New Smart Classroom Infrastructure Unveiled",
        date: "Oct 28, 2025",
        tag: "🏗️ Campus",
        description: "State-of-the-art AI-integrated classrooms launched across all departments. 200+ smart boards installed."
      }
    ]
  },
  {
    id: "psg-tech",
    name: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu",
    icon: "⚙️",
    established: "1951",
    type: "Private Aided Autonomous",
    description: "Coimbatore's crown jewel — innovation, research, and relentless excellence since 1951.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "PSG Opens Applications for Research Internship 2026",
        date: "Nov 8, 2025",
        tag: "📢 Notice",
        description: "Final year students can apply for the 6-month industry-linked research internship. Last date: Dec 1, 2025."
      },
      {
        title: "HackMania 2025 — 36 Hours. 500 Teams. One Winner.",
        date: "Nov 1, 2025",
        tag: "🚀 Hackathon",
        description: "PSG hosts the biggest hackathon in South India. ₹50K prize pool. Register before Dec 10."
      }
    ]
  },
  {
    id: "vit-vellore",
    name: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    icon: "🚀",
    established: "1984",
    type: "Deemed University",
    description: "Where global ambition meets South Indian grit. Top-ranked, tech-obsessed, placement-dominant.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "New AI & ML Curriculum Drops for CSE Specialization",
        date: "Nov 5, 2025",
        tag: "🎓 Academic",
        description: "Updated syllabus now includes Generative AI, LLMs, and Prompt Engineering as core subjects. W curriculum fr."
      },
      {
        title: "VIT Ranks #1 in South India — NIRF 2025",
        date: "Oct 20, 2025",
        tag: "🏆 Achievement",
        description: "VIT Vellore secures top position among all South Indian engineering institutions in NIRF Rankings 2025."
      }
    ]
  },
  {
    id: "srm-institute",
    name: "SRM Institute of Science",
    location: "Chennai, Tamil Nadu",
    icon: "🔬",
    established: "1985",
    type: "Deemed University",
    description: "Massive campus energy, international collaborations, and placement numbers that slap.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "SRM Students Win National Robotics Championship 2025",
        date: "Nov 3, 2025",
        tag: "🏆 Achievement",
        description: "Team RoboSRM defeated 120+ teams at IIT Bombay's Techfest. Absolute W. The grind paid off."
      },
      {
        title: "RoboWars 2026 — Registration Now Live",
        date: "Oct 25, 2025",
        tag: "🤖 Event",
        description: "Combat robotics + automation challenge. Engineer your bot, dominate the arena. ₹30K prize pool."
      }
    ]
  },
  {
    id: "kongu-engineering",
    name: "Kongu Engineering College",
    location: "Erode, Tamil Nadu",
    icon: "📐",
    established: "1983",
    type: "Private Autonomous",
    description: "Quiet achiever with loud results — consistently punching above its weight in placements and research.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "DesignThon 2026 — UI/UX Sprint is BACK",
        date: "Oct 30, 2025",
        tag: "🎨 Event",
        description: "24-hour design sprint for the future of EdTech. ₹15K prize. All branches welcome. Register now."
      }
    ]
  },
  {
    id: "thiagarajar",
    name: "Thiagarajar College of Engineering",
    location: "Madurai, Tamil Nadu",
    icon: "🏗️",
    established: "1957",
    type: "Private Aided Autonomous",
    description: "Madurai's finest — decades of legacy, fierce alumni network, and serious academic firepower.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "CivicThon 2026 — Sustainable Structures Challenge",
        date: "Nov 2, 2025",
        tag: "🏗️ Civil",
        description: "Civil engineering innovation challenge focusing on smart cities and green infrastructure. ₹20K prize pool."
      }
    ]
  },
  {
    id: "cit-coimbatore",
    name: "Coimbatore Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    icon: "💡",
    established: "1956",
    type: "Government Aided Autonomous",
    description: "Old school roots, new school grind. CIT has been building engineers before it was cool.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "CIT Signs MoU with Bosch India for Industry Training",
        date: "Oct 18, 2025",
        tag: "🤝 Industry",
        description: "Students will get hands-on industry exposure through a structured 3-month training program with Bosch."
      }
    ]
  },
  {
    id: "bit-trichy",
    name: "Bharathidasan Institute of Technology",
    location: "Tiruchirappalli, Tamil Nadu",
    icon: "⚗️",
    established: "1984",
    type: "Government Autonomous",
    description: "Trichy's tech powerhouse — clean campus, serious academics, and government-backed reliability.",
    branches: ["firstyear", "cse", "eee", "civil", "mechanical", "chemical"],
    news: [
      {
        title: "BIT Trichy Launches Centre for Drone Technology",
        date: "Oct 15, 2025",
        tag: "✈️ Innovation",
        description: "New centre equipped with 20+ drones for hands-on aerospace and automation research for students."
      }
    ]
  }
];

/* ─────────────────────────────────────────────
   📚 BRANCHES / DEPARTMENTS DATA
   → Edit branch names, icons, descriptions here
───────────────────────────────────────────── */
const BRANCHES = {
  firstyear: {
    id: "firstyear",
    label: "First Year / BHS",
    icon: "🌱",
    description: "The launchpad. Build your foundation before everything else hits.",
    color: "#8b5cf6"
  },
  cse: {
    id: "cse",
    label: "Computer Science (CSE)",
    icon: "💻",
    description: "Code, build, break, repeat. The most in-demand branch on the planet.",
    color: "#2563eb"
  },
  eee: {
    id: "eee",
    label: "Electrical & Electronics (EEE)",
    icon: "⚡",
    description: "Power systems, circuits, and the invisible force running the modern world.",
    color: "#f59e0b"
  },
  civil: {
    id: "civil",
    label: "Civil Engineering",
    icon: "🏗️",
    description: "The architects of civilization — bridges, cities, and everything you walk on.",
    color: "#10b981"
  },
  mechanical: {
    id: "mechanical",
    label: "Mechanical Engineering",
    icon: "⚙️",
    description: "Thermodynamics, machines, and making things that actually move.",
    color: "#ef4444"
  },
  chemical: {
    id: "chemical",
    label: "Chemical Engineering",
    icon: "⚗️",
    description: "Turning raw materials into fuel, medicine, and the future.",
    color: "#06b6d4"
  }
};

/* ─────────────────────────────────────────────
   📝 NOTES DATA
   → Organized by branch → then by unit
   → Replace "downloadUrl" with real Google Drive / PDF links
───────────────────────────────────────────── */
const NOTES = {

  firstyear: [
    {
      unit: "Unit 1", subject: "Engineering Mathematics I",
      topic: "Matrices & Differential Calculus",
      description: "Determinants, eigenvalues, partial derivatives — the maths that holds everything together.",
      pages: "48 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Engineering Mathematics I",
      topic: "Integral Calculus & Differential Equations",
      description: "Integration techniques, ODEs, and boundary value problems from scratch.",
      pages: "52 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Engineering Physics",
      topic: "Optics & Laser Technology",
      description: "Wave optics, interference, diffraction, and how lasers actually work.",
      pages: "38 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Engineering Physics",
      topic: "Quantum Mechanics & Nanotechnology",
      description: "Wave-particle duality, Schrödinger equation, and the insane world of the nano-scale.",
      pages: "44 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Engineering Chemistry",
      topic: "Water Technology & Electrochemistry",
      description: "Water treatment, hardness, softening methods, and corrosion basics.",
      pages: "35 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Problem Solving & Python",
      topic: "Algorithmic Thinking & Python Basics",
      description: "Flowcharts, pseudocode, variables, loops, and your first actual programs.",
      pages: "60 pages", updated: "Nov 2025",
      downloadUrl: "#"
    }
  ],

  cse: [
    {
      unit: "Unit 1", subject: "Data Structures & Algorithms",
      topic: "Arrays, Linked Lists & Stacks",
      description: "The bread and butter of every coding interview. Master these and you're already ahead.",
      pages: "55 pages", updated: "Nov 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Data Structures & Algorithms",
      topic: "Trees, Graphs & Sorting Algorithms",
      description: "Binary trees, BFS, DFS, quicksort, mergesort — the algorithms that power real software.",
      pages: "62 pages", updated: "Nov 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 3", subject: "Data Structures & Algorithms",
      topic: "Hashing, Heaps & Dynamic Programming",
      description: "Hash maps, priority queues, memoization — this is where DSA gets serious.",
      pages: "58 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Database Management Systems",
      topic: "ER Model, Relational Algebra & SQL Basics",
      description: "Entity relationships, schema design, and your first SQL queries. The foundation of every app.",
      pages: "50 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Database Management Systems",
      topic: "Normalization, Transactions & Indexing",
      description: "1NF to BCNF, ACID properties, and why your queries are slow without indexes.",
      pages: "46 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Operating Systems",
      topic: "Processes, Threads & CPU Scheduling",
      description: "How your OS juggles a million tasks without breaking a sweat. Pure magic — explained.",
      pages: "54 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Operating Systems",
      topic: "Memory Management & Virtual Memory",
      description: "Paging, segmentation, page replacement algorithms — the OS memory game.",
      pages: "48 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Computer Networks",
      topic: "OSI Model, TCP/IP & Data Link Layer",
      description: "How data travels from your laptop to servers across the planet. It's wild.",
      pages: "56 pages", updated: "Nov 2025",
      downloadUrl: "#"
    }
  ],

  eee: [
    {
      unit: "Unit 1", subject: "Circuit Theory",
      topic: "KVL, KCL & Network Theorems",
      description: "Kirchhoff's laws, Thevenin, Norton, and Superposition — the fundamentals that never expire.",
      pages: "50 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Circuit Theory",
      topic: "AC Circuits & Resonance",
      description: "Phasors, impedance, power factor, and why resonance matters in real systems.",
      pages: "45 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Electrical Machines",
      topic: "DC Motors & Generators",
      description: "Construction, working principles, characteristics, and speed control of DC machines.",
      pages: "58 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Electrical Machines",
      topic: "Transformers & Induction Motors",
      description: "The workhorses of the power industry — theory, equivalent circuits, and efficiency.",
      pages: "62 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Power Systems",
      topic: "Power Generation & Transmission",
      description: "From powerplant to your wall socket — how the national grid actually works.",
      pages: "52 pages", updated: "Nov 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Digital Electronics",
      topic: "Logic Gates, Boolean Algebra & Combinational Circuits",
      description: "The 0s and 1s that literally run everything. Start here, understand everything.",
      pages: "44 pages", updated: "Oct 2025",
      downloadUrl: "#"
    }
  ],

  civil: [
    {
      unit: "Unit 1", subject: "Strength of Materials",
      topic: "Stress, Strain & Elastic Constants",
      description: "Why structures don't collapse under load — the physics of solid deformation.",
      pages: "55 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Strength of Materials",
      topic: "Bending Moment & Shear Force Diagrams",
      description: "Draw BMDs and SFDs for any beam loading condition — exam essential.",
      pages: "48 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Structural Analysis",
      topic: "Trusses, Frames & Energy Methods",
      description: "Analyze statically determinate and indeterminate structures like a pro.",
      pages: "60 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Fluid Mechanics",
      topic: "Fluid Properties & Fluid Statics",
      description: "Buoyancy, pressure distributions, and the physics of fluids at rest.",
      pages: "42 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Surveying",
      topic: "Chain Surveying & Compass Traversing",
      description: "Old-school but essential — mapping land accurately before everything else begins.",
      pages: "38 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Environmental Engineering",
      topic: "Water Supply & Wastewater Treatment",
      description: "How cities get clean water and deal with what comes after. Critical infrastructure.",
      pages: "46 pages", updated: "Nov 2025",
      downloadUrl: "#"
    }
  ],

  mechanical: [
    {
      unit: "Unit 1", subject: "Engineering Thermodynamics",
      topic: "Laws of Thermodynamics & Properties of Steam",
      description: "Heat, work, entropy — the invisible forces behind every engine ever built.",
      pages: "54 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Engineering Thermodynamics",
      topic: "Carnot Cycle, Rankine & Brayton Cycles",
      description: "Power cycles that run cars, planes, and power plants. Beautiful physics.",
      pages: "50 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Mechanics of Machines",
      topic: "Kinematics of Mechanisms & Gear Trains",
      description: "How mechanisms move, transmit motion, and convert one type of motion to another.",
      pages: "58 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Manufacturing Technology",
      topic: "Casting, Welding & Metal Forming",
      description: "The processes behind making every physical thing in the world. Absolutely fundamental.",
      pages: "62 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Fluid Mechanics & Machinery",
      topic: "Bernoulli's Theorem & Flow Through Pipes",
      description: "Why fluids behave the way they do — and how to engineer systems around them.",
      pages: "44 pages", updated: "Nov 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Design of Machine Elements",
      topic: "Stress Analysis & Design of Shafts",
      description: "Design actual machine parts that won't fail under real-world loads. Engineering at its core.",
      pages: "56 pages", updated: "Oct 2025",
      downloadUrl: "#"
    }
  ],

  chemical: [
    {
      unit: "Unit 1", subject: "Chemical Process Calculations",
      topic: "Material & Energy Balances",
      description: "The accounting of atoms — conservation laws applied to real chemical processes.",
      pages: "50 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 2", subject: "Chemical Process Calculations",
      topic: "Combustion, Humidification & Psychrometry",
      description: "Fuel combustion analysis and air-water systems — industrial process essentials.",
      pages: "44 pages", updated: "Oct 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Fluid Flow Operations",
      topic: "Viscosity, Reynolds Number & Pipe Flow",
      description: "How fluids move through industrial systems and what controls their behavior.",
      pages: "48 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Heat Transfer Operations",
      topic: "Conduction, Convection & Heat Exchangers",
      description: "Temperature driving forces, LMTD, and designing the heat exchangers in every plant.",
      pages: "55 pages", updated: "Sep 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Chemical Reaction Engineering",
      topic: "Batch Reactors & Reaction Kinetics",
      description: "Rate laws, conversion, and designing reactors that actually work at scale.",
      pages: "52 pages", updated: "Nov 2025",
      downloadUrl: "#"
    },
    {
      unit: "Unit 1", subject: "Mass Transfer Operations",
      topic: "Distillation, Absorption & Extraction",
      description: "Separating mixtures at industrial scale — the heart of chemical manufacturing.",
      pages: "58 pages", updated: "Oct 2025",
      downloadUrl: "#"
    }
  ]
};

/* ─────────────────────────────────────────────
   🗓️ EXPORT — makes data available to other files
───────────────────────────────────────────── */
// No modules needed — all variables are global in vanilla JS
// router.js and views.js access COLLEGES, BRANCHES, NOTES directly