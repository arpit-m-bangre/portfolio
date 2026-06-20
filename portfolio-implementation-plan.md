# Portfolio Website — Implementation Plan
**For: Arpit Manoj Bangre — Data Analyst**
**Purpose: Hand this document to an AI coding tool (Claude Code, Cursor, v0, bolt.new, Lovable) to generate the full website.**

---

## 0. Project Brief (read this first, AI tool)

Build a personal portfolio website for a Data Analyst. The site should feel like a **data dashboard** brought to life — dark theme, subtle grid/chart motifs, monospace accents for numbers/stats, smooth scroll animations. Not a generic template. Think "GitHub dark mode meets a BI dashboard," not "Bootstrap landing page #4521."

**Owner info:**
- Name: Arpit Manoj Bangre
- Title: Data Analyst
- Location: Nagpur, Maharashtra, India
- Email: arpit.m.bangre@gmail.com
- Phone: +91 9923423527
- LinkedIn: https://linkedin.com/in/arpitmbangre
- GitHub: https://github.com/arpit-m-bangre
- Live portfolio domain (current/target): https://arpitbangre.vercel.app

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React (Vite)** | Lightweight, fast dev server, no SSR complexity needed for a single-page portfolio |
| Styling | **Tailwind CSS** | Fast to theme, easy dark-mode dashboard aesthetic, well understood by AI codegen tools |
| Animation | **Framer Motion** | Scroll-reveal, hover micro-interactions, page transitions |
| Icons | **lucide-react** | Clean, consistent icon set |
| Charts (decorative + real) | **Recharts** | Used both for real mini-charts (e.g., skill proficiency, GitHub activity) and ambient background visuals |
| Forms | **Web3Forms or Formspree** (free tier) | Contact form without a backend |
| Hosting | **Vercel** | Already using `arpitbangre.vercel.app`; zero-config React deploys |
| Fonts | **Inter** (body/UI) + **JetBrains Mono** (numbers, code, stats) | Mirrors a real BI tool's typography |

> If the AI tool prefers Next.js instead of Vite React, that's fine too — just keep the page as a single route (no need for multi-page routing/SSR).

---

## 2. Design Direction

- **Theme:** Dark mode by default. Background `#0A0E14` or `#0D1117` (GitHub-dark-inspired), card surfaces `#161B22`, borders `#21262D`.
- **Accent color:** One confident accent — recommend an electric teal/cyan (`#22D3EE` or `#2DD4BF`) or amber (`#F59E0B`) to mimic dashboard "highlight" colors. Use sparingly: CTAs, active states, chart lines, glowing underlines.
- **Typography:**
  - Headings: Inter, bold, tight letter-spacing
  - Body: Inter, regular
  - Stats/numbers/code/tags: JetBrains Mono — this is the signature touch that makes it feel "data-native"
- **Motifs to weave in throughout the site:**
  - Subtle animated grid background (like graph paper) in the hero section
  - Thin horizontal "data lines" / sparkline decorations near section dividers
  - Monospace badges for tech stack tags (`Python`, `SQL`, `Power BI`) styled like terminal tags
  - Numbers that count up on scroll (15% ROI, 30% effort reduction, 10+ KPIs)
  - Cursor-following or scroll-triggered subtle parallax on background grid dots
- **Avoid:** stock "AI-generated portfolio" clichés — no generic purple-blue gradient blobs, no Comic-Sans-tier rounded bubbly cards, no cheesy 3D avatar.

---

## 3. Site Structure (single-page, scroll-based, with anchor nav)

```
/
├── Navbar (sticky, blurred background on scroll)
├── Hero Section
├── About / Summary Section
├── Experience Section
├── Skills Section
├── Projects Section
├── Education Section
├── Certifications & Achievements Section
├── Contact Section
└── Footer
```

---

## 4. Section-by-Section Content (use this verbatim, AI tool)

### 4.1 Navbar
- Logo/wordmark: `AB.` or `<ArpitBangre />` styled in monospace
- Links: About · Experience · Skills · Projects · Education · Contact
- Right side: GitHub icon link + LinkedIn icon link + "Resume" download button (PDF)
- Sticky on scroll, subtle blur/backdrop, active-section highlight as user scrolls

### 4.2 Hero Section
- Eyebrow tag: `// DATA ANALYST` (monospace, accent color)
- Headline: **Arpit Manoj Bangre**
- Subheadline: "Turning raw data into decisions — with Python, SQL, and Power BI."
- Short supporting line: "Data Analyst based in Nagpur, India, specializing in ETL pipelines, dashboards, and data storytelling."
- CTA buttons: `View Projects` (primary, accent fill) · `Get in Touch` (secondary, outline)
- Social row: GitHub, LinkedIn, Email icons
- Visual: animated background grid + maybe a subtle animated line chart / sparkline drifting in the background, or a terminal-style typing animation cycling through: `Analyzing data...` → `Building dashboards...` → `Finding insights...`

### 4.3 About / Summary
> Data Analyst with hands-on experience in Python, SQL, Power BI, ETL pipelines, and data visualization. Skilled in transforming complex datasets into actionable insights and supporting data-driven business decisions.

Present this as a short paragraph, optionally paired with 3–4 quick stat chips pulled from experience/projects, e.g.:
- `15%` ROI improvement
- `30%` manual effort reduced
- `10+` KPIs tracked
- `3` Data projects shipped

### 4.4 Experience
**Premathink (Digital Marketing Company)** — Data Analyst Intern
*Jul. 2025 – Present · Nagpur, Maharashtra*
- Analyzed multi-city marketing and campaign data using Python and SQL, contributing to a **15% improvement in marketing ROI**.
- Developed automated ETL pipelines and **Power BI dashboards** tracking 10+ KPIs, reducing manual effort by **30%**.
- Optimized SQL queries using joins, CTEs, and window functions, reducing reporting time from hours to minutes and enabling faster business decisions.

Design as a timeline card with a left accent border, company name bold, date range in monospace, bullets with the bolded metrics visually emphasized (accent color or highlighted background on the numbers).

### 4.5 Skills
Group into categories, render as tag chips (monospace, bordered, pill-shaped) or as small horizontal proficiency bars/radar chart using Recharts:

- **Languages:** Python, SQL
- **Databases:** PostgreSQL, MySQL
- **Data Analysis:** EDA, Statistical Analysis, KPI Analysis, A/B Testing
- **Visualization:** Power BI, Streamlit, Matplotlib, Seaborn, Excel
- **Tools:** Git, GitHub, ETL Pipelines, Query Optimization

Optional nice touch: a small Recharts radar or bar chart visualizing self-rated proficiency across 5–6 core skills (Python, SQL, Power BI, EDA, ETL) — reinforces the "dashboard" identity.

### 4.6 Projects
Render as a grid of cards (3 columns desktop, 1 column mobile). Each card: title, tech stack tags, 2 bullet highlights, GitHub link button, optional "View Details" expand.

**1. Spotify EDA & Interactive Dashboard**
*Python, Pandas, NumPy, Streamlit, Matplotlib · 2025*
- Analyzed Spotify audio features using EDA and statistical techniques to identify factors influencing song popularity and listener engagement.
- Developed an interactive Streamlit dashboard to visualize genre, popularity, energy, and audio trends for data-driven exploration.
- GitHub: https://github.com/arpit-m-bangre/spotify-eda-project

**2. Sales Intelligence Dashboard**
*Python, Pandas, Matplotlib, Seaborn · 2025*
- Built a sales analytics dashboard to evaluate revenue trends, regional performance, and key business KPIs.
- Generated actionable insights to support inventory planning, marketing optimization, and strategic business decisions.
- GitHub: https://github.com/arpit-m-bangre/sales-intelligence-dashboard

**3. NumPy Image Processing Engine**
*Python, NumPy, SciPy, Matplotlib · 2025*
- Developed an image processing engine implementing filtering, edge detection, and convolution operations using NumPy.
- Applied matrix operations, broadcasting, and numerical computing techniques to build image transformations from scratch.
- GitHub: https://github.com/arpit-m-bangre/numpy-image-processing-engine

Each card on hover: subtle lift + accent glow border + slight scale.

### 4.7 Education
**Shri Shivaji Science College** — *2022 – 2025*
B.Sc. in Statistics, Mathematics & Computer Science
Nagpur, MH

Single timeline-style card, same visual language as Experience section but can be more compact.

### 4.8 Certifications & Achievements
Two cards/list items:

**Data Analytics & Data Science Certification** — 2026
Python, SQL, Power BI, Statistics, and Data Analysis Projects
Link: https://classroom.sheryians.com/certificate/4857269236457977b63f04d7

**Runner-Up — Inter-College Data Analysis Competition** — 2025
Recognized among 50+ participants for analytical problem-solving and business insights.
Link: https://drive.google.com/file/d/1a2NCkTdu307XHm1D0UoSKL3dISJoYrNR/view

Each with a small badge/medal icon and a "View Credential →" link.

### 4.9 Contact
- Headline: "Let's work together" or "Have data that needs a story?"
- Contact form: Name, Email, Message → submits via Web3Forms/Formspree
- Direct contact chips below/beside form: Email, Phone, LinkedIn, GitHub — each clickable
- Optional: small note "Open to Data Analyst opportunities" with a status-dot (green pulsing dot, like an "online" indicator — fits the dashboard theme)

### 4.10 Footer
- `© 2026 Arpit Manoj Bangre. Built with React & Tailwind.`
- Repeat social icons
- "Back to top" button

---

## 5. Interaction & Animation Details

- **Scroll-reveal:** Each section fades/slides in on scroll (Framer Motion `whileInView`), staggered for child elements (cards, bullets).
- **Number count-up:** Stats (15%, 30%, 10+) animate from 0 to final value when scrolled into view.
- **Navbar:** Background blur + slight shadow appears after scrolling past hero; active link underline tracks current section.
- **Hover states:** Project cards lift with shadow + accent border glow; buttons have a subtle scale + color shift; skill chips brighten on hover.
- **Hero background:** Animated dot-grid or faint moving gridlines (CSS or canvas), very subtle, low opacity, doesn't distract from text.
- **Cursor (optional, nice-to-have):** Custom cursor that turns into a small crosshair "+" near interactive elements — reinforces "precision/analytics" feel. Skip if it adds too much complexity.
- **Page load:** Brief staggered entrance animation for hero text (headline, subheadline, buttons fade/slide in sequence).

---

## 6. Responsive Behavior

- **Desktop (≥1024px):** Full multi-column layouts (3-col projects, 2-col skills), sticky navbar with all links visible.
- **Tablet (768–1023px):** 2-column projects, collapsed skill groups stack.
- **Mobile (<768px):** Single column everywhere, hamburger menu for navbar, stat chips wrap, charts/radar simplify to simple bar lists if needed for readability.
- Test touch targets ≥44px on mobile for all buttons/links.

---

## 7. Performance & Technical Requirements

- Lighthouse score targets: Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95
- Lazy-load below-the-fold images/charts
- Use semantic HTML (`<nav>`, `<section>`, `<article>` for project cards, proper heading hierarchy h1→h2→h3)
- Add `alt` text to all images
- Meta tags: title, description, Open Graph tags (for LinkedIn/social link previews), favicon
- `robots.txt` + basic `sitemap.xml` for SEO
- Resume PDF should be downloadable from the navbar/hero — host the existing resume PDF in `/public/resume.pdf`

---

## 8. SEO & Meta

```html
<title>Arpit Manoj Bangre | Data Analyst Portfolio</title>
<meta name="description" content="Data Analyst skilled in Python, SQL, Power BI, and ETL pipelines. Explore projects in data visualization, analytics dashboards, and statistical analysis." />
<meta property="og:title" content="Arpit Manoj Bangre | Data Analyst" />
<meta property="og:description" content="Turning raw data into decisions — with Python, SQL, and Power BI." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://arpitbangre.vercel.app" />
```

---

## 9. File/Folder Structure (suggested)

```
portfolio/
├── public/
│   ├── resume.pdf
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ui/ (reusable: Badge, Button, SectionHeading, StatCounter)
│   ├── data/
│   │   └── portfolioData.js   // all content from Section 4 as exported JS objects/arrays
│   ├── hooks/
│   │   └── useScrollSpy.js    // for active nav link tracking
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              // Tailwind directives + custom CSS vars for theme
├── tailwind.config.js
├── index.html
└── package.json
```

**Important:** Put all resume content into `src/data/portfolioData.js` as structured data (arrays of objects for experience, projects, skills, etc.) and have components map over it. This makes future updates (new project, new job) a one-file edit instead of hunting through JSX.

---

## 10. Build Phases (do these in order)

### Phase 1 — Setup
1. Scaffold Vite + React project
2. Install Tailwind, Framer Motion, lucide-react, Recharts
3. Configure Tailwind theme: dark background colors, accent color, fonts (Inter + JetBrains Mono via Google Fonts)
4. Set up base layout, global CSS, dark mode as default

### Phase 2 — Structure & Content
5. Build `portfolioData.js` with all content from Section 4
6. Build static (non-animated) versions of all sections in order: Navbar → Hero → About → Experience → Skills → Projects → Education → Certifications → Contact → Footer
7. Confirm full responsive layout works (mobile, tablet, desktop) before adding animation

### Phase 3 — Visual Polish
8. Apply the dashboard/data aesthetic: grid background in hero, monospace stat/tag styling, accent color usage, card borders/shadows
9. Build reusable `Badge`, `Button`, `SectionHeading`, `StatCounter` components for consistency

### Phase 4 — Animation & Interaction
10. Add Framer Motion scroll-reveal to each section
11. Add number count-up animation to stats
12. Add navbar scroll-spy + sticky blur behavior
13. Add hover states to cards/buttons/chips

### Phase 5 — Functionality
14. Wire up contact form to Web3Forms or Formspree (free, no backend needed)
15. Add resume PDF download link
16. Add working external links (GitHub repos, LinkedIn, certificate links) — verify every link from Section 4

### Phase 6 — SEO, Performance, Deploy
17. Add meta tags, favicon, OG image
18. Run Lighthouse audit, fix performance/accessibility issues
19. Test on real mobile device or browser device emulator
20. Deploy to Vercel (connect to existing `arpitbangre.vercel.app` project or redeploy)
21. Final QA pass: every link clicked, every section checked on mobile + desktop

---

## 11. Content Source — All Links (verbatim, for the AI tool to use exactly as-is)

- Portfolio: https://arpitbangre.vercel.app
- LinkedIn: https://linkedin.com/in/arpitmbangre
- GitHub: https://github.com/arpit-m-bangre
- Email: arpit.m.bangre@gmail.com
- Phone: +91 9923423527
- Project 1 GitHub: https://github.com/arpit-m-bangre/spotify-eda-project
- Project 2 GitHub: https://github.com/arpit-m-bangre/sales-intelligence-dashboard
- Project 3 GitHub: https://github.com/arpit-m-bangre/numpy-image-processing-engine
- Certification credential: https://classroom.sheryians.com/certificate/4857269236457977b63f04d7
- Competition certificate: https://drive.google.com/file/d/1a2NCkTdu307XHm1D0UoSKL3dISJoYrNR/view

---

## 12. Prompt to paste into your AI coding tool

> Build a single-page React (Vite) + Tailwind CSS portfolio website for a Data Analyst, following the attached implementation plan exactly — including the dark dashboard-inspired visual theme (Section 2), the full section content (Section 4), animation behavior (Section 5), responsive rules (Section 6), file structure (Section 9), and build phases (Section 10) in order. Use Framer Motion for animation, lucide-react for icons, and Recharts for the skills visualization. Start with Phase 1 and Phase 2, show me the result, then proceed phase by phase.

---

*End of implementation plan.*
