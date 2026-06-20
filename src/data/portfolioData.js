// ─── Portfolio Data ─────────────────────────────────────────────────────────
// Single source of truth for all content.
// To update: edit this file only — all components map over this data.

// ─── Personal Info ───────────────────────────────────────────────────────────
export const personal = {
  name: 'Arpit Manoj Bangre',
  title: 'Data Analyst',
  location: 'Nagpur, Maharashtra, India',
  email: 'arpit.m.bangre@gmail.com',
  phone: '+91 9923423527',
  linkedin: 'https://linkedin.com/in/arpitmbangre',
  github: 'https://github.com/arpit-m-bangre',
  portfolio: 'https://arpitbangre.vercel.app',
  resume: 'https://drive.google.com/file/d/1cCbX4pJ5ncHjBR5T25bfta1pNoWACCvK/view?usp=sharing',
  summary:
    'Data Analyst with hands-on experience in Python, SQL, Power BI, ETL pipelines, and data visualization. Skilled in transforming complex datasets into actionable insights and supporting data-driven business decisions.',
}

// ─── Hero Typewriter Phrases ──────────────────────────────────────────────────
export const typewriterPhrases = [
  'Analyzing data...',
  'Building dashboards...',
  'Finding insights...',
  'Optimizing queries...',
  'Telling data stories...',
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: 15, suffix: '%', label: 'ROI Improvement' },
  { value: 30, suffix: '%', label: 'Manual Effort Reduced' },
  { value: 10, suffix: '+', label: 'KPIs Tracked' },
  { value: 3,  suffix: '',  label: 'Data Projects Shipped' },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 'premathink',
    company: 'Premathink',
    companyDesc: 'Digital Marketing Company',
    role: 'Data Analyst Intern',
    period: 'Jul. 2025 – Present',
    location: 'Nagpur, Maharashtra',
    bullets: [
      {
        text: 'Analyzed multi-city marketing and campaign data using Python and SQL, contributing to a',
        metric: '15% improvement in marketing ROI',
        textAfter: '.',
      },
      {
        text: 'Developed automated ETL pipelines and',
        metric: 'Power BI dashboards',
        textAfter: ' tracking 10+ KPIs, reducing manual effort by 30%.',
      },
      {
        text: 'Optimized SQL queries using joins, CTEs, and window functions, reducing reporting time from hours to minutes and enabling faster business decisions.',
        metric: null,
        textAfter: '',
      },
    ],
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Data Analysis',
    skills: ['EDA', 'Statistical Analysis', 'KPI Analysis', 'A/B Testing'],
  },
  {
    category: 'Visualization',
    skills: ['Power BI', 'Streamlit', 'Matplotlib', 'Seaborn', 'Excel'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'ETL Pipelines', 'Query Optimization'],
  },
]

// ─── Radar Chart Data (self-rated proficiency 0–100) ─────────────────────────
export const radarData = [
  { skill: 'Python',   value: 90 },
  { skill: 'SQL',      value: 85 },
  { skill: 'Power BI', value: 80 },
  { skill: 'EDA',      value: 88 },
  { skill: 'ETL',      value: 78 },
  { skill: 'Viz',      value: 82 },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'spotify-eda',
    title: 'Spotify EDA & Interactive Dashboard',
    year: '2025',
    stack: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib'],
    bullets: [
      'Analyzed Spotify audio features using EDA and statistical techniques to identify factors influencing song popularity and listener engagement.',
      'Developed an interactive Streamlit dashboard to visualize genre, popularity, energy, and audio trends for data-driven exploration.',
    ],
    github: 'https://github.com/arpit-m-bangre/spotify-eda-project',
    demo: null,
    featured: true,
  },
  {
    id: 'sales-intelligence',
    title: 'Sales Intelligence Dashboard',
    year: '2025',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    bullets: [
      'Built a sales analytics dashboard to evaluate revenue trends, regional performance, and key business KPIs.',
      'Generated actionable insights to support inventory planning, marketing optimization, and strategic business decisions.',
    ],
    github: 'https://github.com/arpit-m-bangre/sales-intelligence-dashboard',
    demo: null,
    featured: true,
  },
  {
    id: 'numpy-image',
    title: 'NumPy Image Processing Engine',
    year: '2025',
    stack: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
    bullets: [
      'Developed an image processing engine implementing filtering, edge detection, and convolution operations using NumPy.',
      'Applied matrix operations, broadcasting, and numerical computing techniques to build image transformations from scratch.',
    ],
    github: 'https://github.com/arpit-m-bangre/numpy-image-processing-engine',
    demo: null,
    featured: false,
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 'sssc',
    institution: 'Shri Shivaji Science College',
    degree: 'B.Sc. in Statistics, Mathematics & Computer Science',
    period: '2022 – 2025',
    location: 'Nagpur, MH',
  },
]

// ─── Certifications & Achievements ───────────────────────────────────────────
export const certifications = [
  {
    id: 'sheryians',
    title: 'Data Analytics & Data Science Certification',
    year: '2026',
    issuer: 'Sheryians Coding School',
    description: 'Python, SQL, Power BI, Statistics, and Data Analysis Projects',
    link: 'https://classroom.sheryians.com/certificate/4857269236457977b63f04d7',
    type: 'certification',
  },
  {
    id: 'runner-up',
    title: 'Runner-Up — Inter-College Data Analysis Competition',
    year: '2025',
    issuer: 'Inter-College Competition',
    description: 'Recognized among 50+ participants for analytical problem-solving and business insights.',
    link: 'https://drive.google.com/file/d/1a2NCkTdu307XHm1D0UoSKL3dISJoYrNR/view',
    type: 'achievement',
  },
]

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Contact',        href: '#contact' },
]
