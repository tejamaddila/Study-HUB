/* ═══════════════════════════════════════════════════════════════
   TECHNOTES HUB — data.js  v2.0
   The Brain 🧠 — All content lives here.
   Colleges · Branches · Notes · Regulations · Years
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   🏫 COLLEGES DATA
───────────────────────────────────────────── */
const COLLEGES = [
  {
    id: "gmr-tech",
    name: "GMR Institute of Technology",
    location: "Rajam, Andhra Pradesh",
    icon: "🏛️",
    established: "1997",
    type: "Private Autonomous",
    affiliation: "JNTUK",
    description: "GMR Institute of Technology — shaping engineers with strong industry connections and a vibrant campus culture.",
    branches: ["firstyear", "cse", "ece", "eee", "civil", "mechanical"],
    news: [
      {
        title: "GMRIT Placement Drive 2025 — 150+ Offers in First Week",
        date: "Nov 12, 2025",
        tag: "💼 Placements",
        description: "Companies like TCS, Infosys, Wipro, and Cognizant visited campus. 150+ students received offers in the opening week of placement season."
      },
      {
        title: "New AI & Data Science Lab Inaugurated",
        date: "Oct 20, 2025",
        tag: "🏗️ Campus",
        description: "State-of-the-art AI lab with 80 high-end workstations and NVIDIA GPU clusters launched for final year research projects."
      },
      {
        title: "GMRIT Students Win Smart India Hackathon 2025",
        date: "Oct 5, 2025",
        tag: "🏆 Achievement",
        description: "Team CodeCraft from CSE department won ₹1 Lakh prize at SIH 2025 with their AI-based crop disease detection system."
      }
    ]
  },
  {
    id: "mvgr",
    name: "MVGR College of Engineering",
    location: "Vizianagaram, Andhra Pradesh",
    icon: "⚙️",
    established: "1997",
    type: "Private Autonomous",
    affiliation: "JNTUK",
    description: "MVGR — a premier institution with decades of engineering excellence, strong alumni network and top-tier placements.",
    branches: ["firstyear", "cse", "ece", "eee", "civil", "mechanical"],
    news: [
      {
        title: "MVGR Bags NAAC 'A' Grade Accreditation",
        date: "Nov 8, 2025",
        tag: "🏆 Achievement",
        description: "MVGR College of Engineering receives prestigious NAAC 'A' grade, reaffirming its commitment to academic excellence."
      },
      {
        title: "National Level Symposium TECHNOVA 2025 Announced",
        date: "Oct 28, 2025",
        tag: "🎉 Event",
        description: "Annual national symposium TECHNOVA 2025 scheduled for December. Paper presentations, workshops, and cultural events planned."
      }
    ]
  },
  {
    id: "lendi",
    name: "Lendi Institute of Engineering",
    location: "Vizianagaram, Andhra Pradesh",
    icon: "🚀",
    established: "2006",
    type: "Private Autonomous",
    affiliation: "JNTUK",
    description: "Lendi — where passion meets precision. Known for its strong CSE and ECE departments and excellent infrastructure.",
    branches: ["firstyear", "cse", "ece", "eee", "civil", "mechanical"],
    news: [
      {
        title: "Lendi Launches Centre for Innovation & Entrepreneurship",
        date: "Nov 5, 2025",
        tag: "💡 Innovation",
        description: "New startup incubator opened to support student entrepreneurs with funding, mentoring, and co-working space."
      },
      {
        title: "LIET Wins Best College Award — District Level",
        date: "Oct 15, 2025",
        tag: "🏆 Achievement",
        description: "Lendi Institute bags Best College award at the district-level excellence awards for the third consecutive year."
      }
    ]
  },
  {
    id: "raghu",
    name: "Raghu Engineering College",
    location: "Visakhapatnam, Andhra Pradesh",
    icon: "🔬",
    established: "2001",
    type: "Private Autonomous",
    affiliation: "JNTUK",
    description: "Raghu Engineering College — building tomorrow's engineers with a focus on hands-on learning and industry collaboration.",
    branches: ["firstyear", "cse", "ece", "eee", "civil", "mechanical"],
    news: [
      {
        title: "Raghu EC Partners with Microsoft for Cloud Certification",
        date: "Nov 3, 2025",
        tag: "🤝 Industry",
        description: "Students can now pursue Microsoft Azure certifications at subsidized rates through a new campus partnership."
      },
      {
        title: "REC Launches E-Cell for Student Entrepreneurs",
        date: "Oct 22, 2025",
        tag: "💡 Startup",
        description: "New entrepreneurship cell officially launched with seed funding support and mentorship from industry veterans."
      }
    ]
  },
  {
    id: "anits",
    name: "ANITS",
    location: "Visakhapatnam, Andhra Pradesh",
    icon: "📐",
    established: "2001",
    type: "Private Autonomous",
    affiliation: "JNTUK",
    description: "Anil Neerukonda Institute of Technology and Sciences — strong research culture, excellent faculty, and outstanding placement records.",
    branches: ["firstyear", "cse", "ece", "eee", "civil", "mechanical"],
    news: [
      {
        title: "ANITS Students Secure 12 Internships at Amazon",
        date: "Oct 30, 2025",
        tag: "💼 Placements",
        description: "12 final year CSE students secured internships at Amazon Development Centre through campus placement drive."
      },
      {
        title: "ANITS Robotics Team Qualifies for Nationals",
        date: "Oct 10, 2025",
        tag: "🤖 Achievement",
        description: "The robotics team advances to the national level competition after dominating at zonal rounds held at IIT Kharagpur."
      }
    ]
  },
  {
    id: "miracle",
    name: "Miracle Educational Society",
    location: "Vizianagaram, Andhra Pradesh",
    icon: "🏗️",
    established: "2008",
    type: "Private",
    affiliation: "JNTUK",
    description: "Miracle Group of Institutions — dedicated to holistic education with a strong focus on career readiness and technical skills.",
    branches: ["firstyear", "cse", "ece", "eee", "civil", "mechanical"],
    news: [
      {
        title: "Miracle Group Launches Skill Development Center",
        date: "Nov 1, 2025",
        tag: "📚 Academic",
        description: "New skill development center launched in partnership with NASSCOM to bridge the industry-academia gap."
      },
      {
        title: "MECET 2025 — National Conference on Emerging Technologies",
        date: "Oct 18, 2025",
        tag: "🎓 Academic",
        description: "National conference MECET 2025 to be held in December. Research papers invited from all engineering disciplines."
      }
    ]
  }
];

/* ─────────────────────────────────────────────
   📚 BRANCHES / DEPARTMENTS DATA
   → Now includes years and regulations
───────────────────────────────────────────── */
const BRANCHES = {
  firstyear: {
    id: "firstyear",
    label: "First Year / BHS",
    icon: "🌱",
    description: "The launchpad. Build your foundation before everything else hits.",
    color: "#8b5cf6",
    years: ["1st Year"],
    regulations: ["R23", "R22", "R19"],
    currentRegulation: "R23"
  },
  cse: {
    id: "cse",
    label: "Computer Science (CSE)",
    icon: "💻",
    description: "Code, build, break, repeat. The most in-demand branch on the planet.",
    color: "#2563eb",
    years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    regulations: ["R23", "R22", "R19", "R16"],
    currentRegulation: "R23"
  },
  ece: {
    id: "ece",
    label: "Electronics & Comm. (ECE)",
    icon: "📡",
    description: "Signals, circuits, and communication systems powering the connected world.",
    color: "#7c3aed",
    years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    regulations: ["R23", "R22", "R19", "R16"],
    currentRegulation: "R23"
  },
  eee: {
    id: "eee",
    label: "Electrical & Electronics (EEE)",
    icon: "⚡",
    description: "Power systems, circuits, and the invisible force running the modern world.",
    color: "#d97706",
    years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    regulations: ["R23", "R22", "R19", "R16"],
    currentRegulation: "R23"
  },
  civil: {
    id: "civil",
    label: "Civil Engineering",
    icon: "🏗️",
    description: "The architects of civilization — bridges, cities, and everything you walk on.",
    color: "#059669",
    years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    regulations: ["R23", "R22", "R19", "R16"],
    currentRegulation: "R23"
  },
  mechanical: {
    id: "mechanical",
    label: "Mechanical Engineering",
    icon: "⚙️",
    description: "Thermodynamics, machines, and making things that actually move.",
    color: "#dc2626",
    years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    regulations: ["R23", "R22", "R19", "R16"],
    currentRegulation: "R23"
  }
};

/* ─────────────────────────────────────────────
   📝 NOTES DATA
   → Organized by branch → then by year → then by unit
───────────────────────────────────────────── */
const NOTES = {

  firstyear: {
    "1st Year": [
      {
        unit: "Unit 1", subject: "Engineering Mathematics I",
        topic: "Matrices & Differential Calculus",
        description: "Determinants, eigenvalues, partial derivatives — the maths that holds everything together.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Engineering Mathematics I",
        topic: "Integral Calculus & Differential Equations",
        description: "Integration techniques, ODEs, and boundary value problems from scratch.",
        pages: "52 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Engineering Physics",
        topic: "Optics & Laser Technology",
        description: "Wave optics, interference, diffraction, and how lasers actually work.",
        pages: "38 pages", updated: "Sep 2025", regulation: "R23",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Engineering Physics",
        topic: "Quantum Mechanics & Nanotechnology",
        description: "Wave-particle duality, Schrödinger equation, and the insane world of nano-scale.",
        pages: "44 pages", updated: "Sep 2025", regulation: "R23",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Engineering Chemistry",
        topic: "Water Technology & Electrochemistry",
        description: "Water treatment, hardness, softening methods, and corrosion basics.",
        pages: "35 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Problem Solving & Python",
        topic: "Algorithmic Thinking & Python Basics",
        description: "Flowcharts, pseudocode, variables, loops, and your first actual programs.",
        pages: "60 pages", updated: "Nov 2025", regulation: "R23",
        downloadUrl: "#"
      }
    ]
  },

  cse: {
    "1st Year": [
      {
        unit: "Unit 1", subject: "Engineering Mathematics I",
        topic: "Matrices & Differential Calculus",
        description: "The mathematical foundation of every algorithm and model you'll ever write.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Problem Solving & Python",
        topic: "Algorithmic Thinking & Python Basics",
        description: "Flowcharts, pseudocode, loops, and your first programs. The beginning.",
        pages: "60 pages", updated: "Nov 2025", regulation: "R23",
        downloadUrl: "#"
      }
    ],
    "2nd Year": [
      {
        unit: "Unit 1", subject: "Data Structures & Algorithms",
        topic: "Arrays, Linked Lists & Stacks",
        description: "The bread and butter of every coding interview. Master these and you're already ahead.",
        pages: "55 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Data Structures & Algorithms",
        topic: "Trees, Graphs & Sorting Algorithms",
        description: "Binary trees, BFS, DFS, quicksort — algorithms that power real software.",
        pages: "62 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 3", subject: "Data Structures & Algorithms",
        topic: "Hashing, Heaps & Dynamic Programming",
        description: "Hash maps, priority queues, memoization — where DSA gets serious.",
        pages: "58 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Database Management Systems",
        topic: "ER Model, Relational Algebra & SQL Basics",
        description: "Entity relationships, schema design, and your first SQL queries.",
        pages: "50 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Database Management Systems",
        topic: "Normalization, Transactions & Indexing",
        description: "1NF to BCNF, ACID properties, and why your queries are slow without indexes.",
        pages: "46 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "3rd Year": [
      {
        unit: "Unit 1", subject: "Operating Systems",
        topic: "Processes, Threads & CPU Scheduling",
        description: "How your OS juggles a million tasks without breaking a sweat.",
        pages: "54 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Operating Systems",
        topic: "Memory Management & Virtual Memory",
        description: "Paging, segmentation, page replacement — the OS memory game.",
        pages: "48 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Computer Networks",
        topic: "OSI Model, TCP/IP & Data Link Layer",
        description: "How data travels from your laptop to servers across the planet.",
        pages: "56 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Software Engineering",
        topic: "SDLC Models & Requirements Engineering",
        description: "Waterfall, Agile, Scrum — the workflows behind professional software teams.",
        pages: "44 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "4th Year": [
      {
        unit: "Unit 1", subject: "Machine Learning",
        topic: "Supervised Learning & Regression Models",
        description: "Linear regression, logistic regression, decision trees — ML fundamentals that actually matter.",
        pages: "60 pages", updated: "Nov 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Machine Learning",
        topic: "Neural Networks & Deep Learning Intro",
        description: "Perceptrons, backpropagation, CNNs — the building blocks of modern AI.",
        pages: "66 pages", updated: "Nov 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Cloud Computing",
        topic: "Cloud Models, AWS & Azure Fundamentals",
        description: "IaaS, PaaS, SaaS, and how to build scalable systems on the cloud.",
        pages: "50 pages", updated: "Oct 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Cyber Security",
        topic: "Cryptography, Network Security & Ethical Hacking",
        description: "Encryption, firewalls, penetration testing — keep systems safe in the real world.",
        pages: "54 pages", updated: "Oct 2025", regulation: "R19",
        downloadUrl: "#"
      }
    ]
  },

  ece: {
    "1st Year": [
      {
        unit: "Unit 1", subject: "Engineering Mathematics I",
        topic: "Matrices & Differential Calculus",
        description: "Mathematical foundation — essential for signal processing and circuits.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      }
    ],
    "2nd Year": [
      {
        unit: "Unit 1", subject: "Electronic Devices & Circuits",
        topic: "PN Junction Diodes & Rectifiers",
        description: "Diode characteristics, clippers, clampers, rectifiers — fundamentals of analog electronics.",
        pages: "52 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Electronic Devices & Circuits",
        topic: "Transistors & Amplifiers",
        description: "BJT, MOSFET characteristics, small-signal models, and amplifier configurations.",
        pages: "58 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Signals & Systems",
        topic: "Fourier Transform & Convolution",
        description: "Signal representation, Fourier analysis, and the convolution theorem — core ECE theory.",
        pages: "54 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "3rd Year": [
      {
        unit: "Unit 1", subject: "Digital Communications",
        topic: "Modulation Techniques — AM, FM, PM",
        description: "Analog and digital modulation schemes, bandwidth, and noise analysis.",
        pages: "56 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "VLSI Design",
        topic: "CMOS Logic Design & Layout",
        description: "CMOS circuits, layout design, static timing analysis — chip design starts here.",
        pages: "60 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Microprocessors & Microcontrollers",
        topic: "8085 Architecture & Assembly Language",
        description: "Registers, instruction sets, interrupts, and interfacing — embedded foundations.",
        pages: "50 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "4th Year": [
      {
        unit: "Unit 1", subject: "Antenna & Wave Propagation",
        topic: "Antenna Parameters & Radiation Patterns",
        description: "Directivity, gain, beamwidth, and how antennas radiate electromagnetic energy.",
        pages: "48 pages", updated: "Nov 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Embedded Systems",
        topic: "ARM Architecture & RTOS Fundamentals",
        description: "ARM Cortex-M, real-time operating systems, and embedded software development.",
        pages: "62 pages", updated: "Oct 2025", regulation: "R19",
        downloadUrl: "#"
      }
    ]
  },

  eee: {
    "1st Year": [
      {
        unit: "Unit 1", subject: "Engineering Mathematics I",
        topic: "Matrices & Differential Calculus",
        description: "The maths behind every power system and circuit analysis you'll ever do.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      }
    ],
    "2nd Year": [
      {
        unit: "Unit 1", subject: "Circuit Theory",
        topic: "KVL, KCL & Network Theorems",
        description: "Kirchhoff's laws, Thevenin, Norton, and Superposition — fundamentals that never expire.",
        pages: "50 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Circuit Theory",
        topic: "AC Circuits & Resonance",
        description: "Phasors, impedance, power factor, and why resonance matters in real systems.",
        pages: "45 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Electrical Machines",
        topic: "DC Motors & Generators",
        description: "Construction, working principles, characteristics, and speed control of DC machines.",
        pages: "58 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "3rd Year": [
      {
        unit: "Unit 1", subject: "Power Systems",
        topic: "Power Generation & Transmission",
        description: "From powerplant to your wall socket — how the national grid actually works.",
        pages: "52 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Electrical Machines",
        topic: "Transformers & Induction Motors",
        description: "The workhorses of the power industry — theory, equivalent circuits, and efficiency.",
        pages: "62 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Digital Electronics",
        topic: "Logic Gates, Boolean Algebra & Combinational Circuits",
        description: "The 0s and 1s that literally run everything. Start here, understand everything.",
        pages: "44 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "4th Year": [
      {
        unit: "Unit 1", subject: "Power Electronics",
        topic: "Thyristors, Converters & Inverters",
        description: "SCR, IGBT, AC-DC converters, and the electronics controlling massive power systems.",
        pages: "56 pages", updated: "Nov 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Control Systems",
        topic: "Transfer Functions, Bode Plot & Root Locus",
        description: "System stability, frequency response — the math that keeps aircraft in the air.",
        pages: "60 pages", updated: "Oct 2025", regulation: "R19",
        downloadUrl: "#"
      }
    ]
  },

  civil: {
    "1st Year": [
      {
        unit: "Unit 1", subject: "Engineering Mathematics I",
        topic: "Matrices & Differential Calculus",
        description: "The mathematical tools behind structural analysis and fluid mechanics.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      }
    ],
    "2nd Year": [
      {
        unit: "Unit 1", subject: "Strength of Materials",
        topic: "Stress, Strain & Elastic Constants",
        description: "Why structures don't collapse under load — the physics of solid deformation.",
        pages: "55 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Strength of Materials",
        topic: "Bending Moment & Shear Force Diagrams",
        description: "Draw BMDs and SFDs for any beam loading condition — exam essential.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Fluid Mechanics",
        topic: "Fluid Properties & Fluid Statics",
        description: "Buoyancy, pressure distributions, and the physics of fluids at rest.",
        pages: "42 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "3rd Year": [
      {
        unit: "Unit 1", subject: "Structural Analysis",
        topic: "Trusses, Frames & Energy Methods",
        description: "Analyze statically determinate and indeterminate structures like a pro.",
        pages: "60 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Surveying",
        topic: "Chain Surveying & Compass Traversing",
        description: "Old-school but essential — mapping land accurately before everything else begins.",
        pages: "38 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Environmental Engineering",
        topic: "Water Supply & Wastewater Treatment",
        description: "How cities get clean water and deal with what comes after. Critical infrastructure.",
        pages: "46 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "4th Year": [
      {
        unit: "Unit 1", subject: "Design of Steel Structures",
        topic: "IS Code Design, Beams & Columns",
        description: "Design safe, efficient steel structures following Indian standard codes.",
        pages: "58 pages", updated: "Nov 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Foundation Engineering",
        topic: "Soil Exploration & Foundation Types",
        description: "Shallow and deep foundations, bearing capacity, and real-world site investigation.",
        pages: "52 pages", updated: "Oct 2025", regulation: "R19",
        downloadUrl: "#"
      }
    ]
  },

  mechanical: {
    "1st Year": [
      {
        unit: "Unit 1", subject: "Engineering Mathematics I",
        topic: "Matrices & Differential Calculus",
        description: "The mathematical foundation for all mechanical analysis and design.",
        pages: "48 pages", updated: "Oct 2025", regulation: "R23",
        downloadUrl: "#"
      }
    ],
    "2nd Year": [
      {
        unit: "Unit 1", subject: "Engineering Thermodynamics",
        topic: "Laws of Thermodynamics & Properties of Steam",
        description: "Heat, work, entropy — the invisible forces behind every engine ever built.",
        pages: "54 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 2", subject: "Engineering Thermodynamics",
        topic: "Carnot Cycle, Rankine & Brayton Cycles",
        description: "Power cycles that run cars, planes, and power plants. Beautiful physics.",
        pages: "50 pages", updated: "Oct 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Manufacturing Technology",
        topic: "Casting, Welding & Metal Forming",
        description: "The processes behind making every physical thing in the world.",
        pages: "62 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "3rd Year": [
      {
        unit: "Unit 1", subject: "Mechanics of Machines",
        topic: "Kinematics of Mechanisms & Gear Trains",
        description: "How mechanisms move, transmit motion, and convert one motion to another.",
        pages: "58 pages", updated: "Sep 2025", regulation: "R22",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "Fluid Mechanics & Machinery",
        topic: "Bernoulli's Theorem & Flow Through Pipes",
        description: "Why fluids behave the way they do — and how to engineer systems around them.",
        pages: "44 pages", updated: "Nov 2025", regulation: "R22",
        downloadUrl: "#"
      }
    ],
    "4th Year": [
      {
        unit: "Unit 1", subject: "Design of Machine Elements",
        topic: "Stress Analysis & Design of Shafts",
        description: "Design actual machine parts that won't fail under real-world loads.",
        pages: "56 pages", updated: "Oct 2025", regulation: "R19",
        downloadUrl: "#"
      },
      {
        unit: "Unit 1", subject: "CAD/CAM",
        topic: "Geometric Modelling & CNC Programming",
        description: "Computer-aided design, manufacturing automation, and G-code for CNC machining.",
        pages: "52 pages", updated: "Nov 2025", regulation: "R19",
        downloadUrl: "#"
      }
    ]
  }
};

/* ─────────────────────────────────────────────
   🗓️ All data is global — accessed by views.js
───────────────────────────────────────────── */
