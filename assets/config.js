/**
 * ════════════════════════════════════════════════════════
 *  config.js — Central configuration for Shivam Raj's portfolio
 *  Edit this file to update all site content without touching
 *  index.html, style.css, or script.js.
 * ════════════════════════════════════════════════════════
 */

/* ── Personal Info ── */
const CONFIG_PERSONAL = {
    name: 'Shivam Raj',
    tagline: 'Fullstack Developer',          // shown under name
    location: 'Roorkee, India',
    birthday: 'July 14, 2004',
    email: 'sraj2004bxr@gmail.com',
    phone: '+91 9955399037',
    website: 'https://shivamraj.vercel.app/',
    avatar: 'https://github.com/IMSHIVAMRAJ.png',
    // Roles cycled in the typewriter — add/remove freely
    roles: [
        'Backend Developer',
        'Fullstack Engineer',
        'Problem Solver',
        'AI Integration Dev',
    ],
};

/* ── Socials ── */
const CONFIG_SOCIALS = [
    { icon: 'fab fa-github', url: 'https://github.com/IMSHIVAMRAJ', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/shivam-raj-ojha-1680b5284/', label: 'LinkedIn' },
    { icon: 'fas fa-code', url: 'https://leetcode.com/u/SHIVAM_RAJ_OJHA/', label: 'LeetCode' },
    { icon: 'fas fa-globe', url: 'https://shivamraj.vercel.app/', label: 'Website' },
];

/* ── Navigation Tabs ── */
const CONFIG_NAV = [
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file-lines' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { id: 'mywork', label: 'Certifications', icon: 'fab fa-github' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane' },
];

/* ── Stats (About section counters) ── */
const CONFIG_STATS = [
    { value: 500, suffix: '+', label: 'DSA Problems Solved' },
    { value: 3, suffix: '+', label: 'Production Projects' },
    { value: 2, suffix: '+', label: 'Years Experience' },
    { value: 600, suffix: '+', label: 'Student Taught' },
];

/* ── Services / What I Do ── */
const CONFIG_SERVICES = [
    { icon: 'fas fa-server', title: 'Backend Development', desc: 'Node.js, Express.js, FastAPI — scalable REST APIs and secure authentication.' },
    { icon: 'fas fa-react', title: 'Frontend Development', desc: 'React.js with Tailwind CSS — responsive and dynamic user interfaces.' },
    { icon: 'fas fa-database', title: 'Database Design', desc: 'MongoDB, MySQL, Redis — optimized data structures and indexing strategies.' },
    { icon: 'fas fa-brain', title: 'AI Integration', desc: 'LangChain, OpenAI API, RAG — intelligent workflows and automation.' },
    { icon: 'fas fa-cube', title: 'DevOps & Deployment', desc: 'Docker, CI/CD, AWS — containerization and scalable cloud infrastructure.' },
    { icon: 'fas fa-chess', title: 'Problem Solving', desc: '500+ DSA problems — strong algorithmic thinking and optimization.' },
];

/* ────────────────────────────────────────────────────
   RESUME
   ──────────────────────────────────────────────────── */

/* Education — add/remove objects freely */
const CONFIG_EDUCATION = [
    {
        date: '2023 — 2027',
        title: 'Quantum University, Roorkee',
        body: 'B.Tech (Computer Science) — CGPA: 8.05',
    },
    {
        date: '2021 — 2022',
        title: 'Cambridge Senior Secondary School',
        body: 'Intermediate — Science Stream',
    },
    {
        date: '2020',
        title: 'St. Paul School',
        body: 'Matriculation',
    },
];

/* Experience — add/remove objects freely */
const CONFIG_EXPERIENCE = [
    {
        date: 'Aug 2024 — Aug 2025',
        title: 'Core Team Member — Google Developer Group (GDG)',
        body: 'Coordinated technical events and workshops, conducted knowledge sessions on full-stack development.',
    },
    {
        date: 'May 2025 — Aug 2025',
        title: 'Backend Developer Intern — Digrows',
        body: 'Architected backend with Node.js/Express.js, JWT auth, REST APIs, chat systems on WebSocket, and calendar-based scheduling.',
    },
];

/**
 * Skills — each group has a label and a list of skill objects.
 * skill.width = percentage (0-100) for the bar fill.
 */
const CONFIG_SKILLS = [
    {
        group: 'Backend Development',
        items: [
            { name: 'Node.js & Express.js', width: 90 },
            { name: 'REST APIs & WebSocket', width: 85 },
            { name: 'Authentication & Authorization', width: 80 },
        ],
    },
    {
        group: 'Languages & Databases',
        items: [
            { name: 'JavaScript & Python', width: 90 },
            { name: 'MongoDB & MySQL', width: 85 },
            { name: 'Redis & AWS', width: 75 },
        ],
    },
    {
        group: 'Frontend & DevOps',
        items: [
            { name: 'React.js & Tailwind CSS', width: 80 },
            { name: 'Docker & CI/CD', width: 78 },
            { name: 'Git & Postman', width: 85 },
        ],
    },
];

/**
 * Tech Stack groups — shown as chip tags in Resume.
 */
const CONFIG_TECH_STACK = [
    {
        group: 'Languages',
        chips: ['JavaScript', 'Python', 'C++', 'SQL'],
    },
    {
        group: 'Backend',
        chips: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSocket', 'JWT'],
    },
    {
        group: 'Frontend',
        chips: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
        group: 'Databases & Caching',
        chips: ['MongoDB', 'MySQL', 'Redis', 'GeoSpatial Indexing'],
    },
    {
        group: 'DevOps & Cloud',
        chips: ['Docker', 'Git', 'GitHub', 'AWS (EC2, S3)', 'CI/CD Pipeline', 'Postman'],
    },
    {
        group: 'AI & Automation',
        chips: ['LangChain', 'n8n', 'RAG', 'OpenAI API', 'OCR'],
    },
];

/* ────────────────────────────────────────────────────
   PROJECTS
   Each project:
     name        — display title
     cover       — image filename inside assets/images/ (or null)
     icon        — FA class used when no image
     category    — used for filter chip label
     github      — GitHub repo URL  (null to hide GH button)
     demo        — Live demo / try-it URL (null to hide Try button)
     description — short blurb shown on the card
   ──────────────────────────────────────────────────── */
const CONFIG_PROJECTS = [
    {
        name: 'Park-Intel — Intelligent GeoSpatial Parking Automation Platform',
        cover: 'park_intel.png',
        icon: 'fas fa-parking',
        category: 'Fullstack',
        github: 'https://github.com/IMSHIVAMRAJ/park-intel',
        demo: 'https://park-intel.vercel.app/',
        description: 'Real-time smart parking backend with transactional slot management, OCR vehicle detection, Redis GeoSpatial indexing, and AI-powered occupancy prediction with intelligent billing.',
    },
    {
        name: 'WeCare — AI-Powered Care Service Platform',
        cover: 'wecare.png',
        icon: 'fas fa-heart',
        category: 'Fullstack',
        github: 'https://github.com/IMSHIVAMRAJ/wecare',
        demo: 'https://we-caree.vercel.app/',
        description: 'Full-stack care service platform for seniors and differently-abled users with role-based dashboards, LangChain AI recommendations, Razorpay payments, and dynamic CRUD architecture.',
    },
    {
        name: 'HackVerse — Collaborative Hackathon Ecosystem',
        cover: 'hackverse.png',
        icon: 'fas fa-rocket',
        category: 'Fullstack',
        github: 'https://github.com/IMSHIVAMRAJ/hackverse',
        demo: 'https://hack-verse-sr.vercel.app/',
        description: 'Real-time hackathon collaboration platform with team discovery, OpenAI-powered idea validation, auto team-matching, expert mentorship scheduling, and Socket.io messaging.',
    },
     {
        name: 'FullStack Chat-App',
        cover: 'chat.jpg',
        icon: 'fas fa-rocket',
        category: 'Fullstack',
        github: 'https://github.com/IMSHIVAMRAJ/fullstack_chat_app',
        demo: null,
        description: 'Real-time fullstack chat application with user authentication, message persistence, and WebSocket-based real-time communication.',
    }, {
        name: 'Jharkhand Tourism ',
        cover: 'jharkhand.jpg',
        icon: 'fas fa-rocket',
        category: 'Mernstack',
        github: 'https://github.com/IMSHIVAMRAJ/Jharkhand_Tourism',
        demo: null,
        description: 'Comprehensive tourism platform for Jharkhand showcasing destinations, attractions, and travel packages. Built as part of the Smart India Hackathon 2024 project.',
    }, {
        name: 'She-Help',
        cover: 'she.jpg',
        icon: 'fas fa-rocket',
        category: 'Mernstack',
        github: 'https://github.com/IMSHIVAMRAJ/SheHelp',
        demo: null,
        description: 'Website to help female from problems such as pcod , pregancy and mental health',
    }, {
        name: 'IPDIS',
        cover: 'ipdis.jpg',
        icon: 'fas fa-rocket',
        category: 'Mernstack',
        github: 'https://github.com/IMSHIVAMRAJ/IPSDIS',
        demo: null,
        description: 'A pathological society project build as part of freelance work to help pathologist to share their research and knowledge',
    }, {
        name: 'GIGA-CHAT',
        cover: 'chat.jpg',
        icon: 'fas fa-rocket',
        category: 'React',
        github: 'https://github.com/IMSHIVAMRAJ/GIGA-CHAT',
        demo: null,
        description: 'A chat application build using gemini api ',
    },
    {
        name: 'CryptoPlace',
        cover: 'crypto.png',
        icon: 'fas fa-rocket',
        category: 'React',
        github: 'https://github.com/IMSHIVAMRAJ/Cryptoplace',
        demo: null,
        description: 'A crypto marketplace platform built with React and external api, featuring real-time price tracking',
    },
];

/* ────────────────────────────────────────────────────
   CERTIFICATIONS
   Each certification:
     title       — certification name
     issuer      — issuing organization
     image       — image filename inside assets/images/
     url         — link to certification or issuer (optional)
     description — short description shown on the card
   ──────────────────────────────────────────────────── */
const CONFIG_CERTIFICATIONS = [
    {
        title: 'Postman Student Expert',
        issuer: 'Postman',
        image: 'postman.png',
        url: 'https://www.postman.com/',
        description: 'Mastered API development and testing with Postman. Demonstrated expertise in REST API design, testing, and automation.',
    },
    {
        title: 'Generative AI Study Jams',
        issuer: 'Google',
        image: 'genai.png',
        url: 'https://www.google.com/',
        description: 'Completed comprehensive study program on Generative AI fundamentals, architecture, and practical applications.',
    },
    {
        title: 'Solution Challenge',
        issuer: 'Google',
        image: 'solution.png',
        url: 'https://www.google.com/',
        description: 'Developed innovative solutions to real-world problems using Google technologies and SDGs framework.',
    },
];

/* ── GitHub username for My Work section ── */
const CONFIG_GITHUB_USER = 'IMSHIVAMRAJ';

/* ── Contact map embed (Google Maps iframe src) ── */
const CONFIG_MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55361.614822005315!2d77.85362601237544!3d29.86136305384657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36e08b35119%3A0x798f5dc25ebd0a72!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1736681777777!5m2!1sen!2sin';
