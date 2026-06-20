import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { personal, typewriterPhrases } from '../data/portfolioData'

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(phrases, speed = 65, pause = 2000) {
  const [display, setDisplay]     = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
    }
    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause])

  return display
}

// ─── Decorative sparkline ─────────────────────────────────────────────────────
function SparklineDecoration() {
  return (
    <motion.div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[180px] pointer-events-none select-none hidden lg:block sparkline-float"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 55" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0"   />
            <stop offset="40%"  stopColor="#22D3EE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"    />
          </linearGradient>
        </defs>
        <path d="M0,35 L20,15 L40,45 L60,5 L80,30 L100,10 L120,40 L140,20 L160,50 L180,15 L200,35 L200,55 L0,55 Z" fill="url(#fillGrad)" />
        <polyline
          points="0,35 20,15 40,45 60,5 80,30 100,10 120,40 140,20 160,50 180,15 200,35"
          fill="none" stroke="url(#sparkGrad)" strokeWidth="1.5"
          strokeLinejoin="round" strokeLinecap="round"
        />
        {[[60,5],[120,10],[200,35]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#22D3EE" opacity="0.8" />
        ))}
      </svg>
    </motion.div>
  )
}

// ─── Terminal card decoration ──────────────────────────────────────────────────
function TerminalCard() {
  return (
    <motion.div
      className="absolute left-4 bottom-24 hidden xl:block pointer-events-none select-none"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <div className="font-mono text-[10px] text-accent/40 leading-relaxed border border-accent/10 rounded-lg p-4 bg-bg-card/20 backdrop-blur-sm w-52">
        <div className="flex gap-1 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500/40"    />
          <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <span className="w-2 h-2 rounded-full bg-green-500/40"  />
        </div>
        <p>$ python analyze.py</p>
        <p className="text-green-400/60">✓ 15% ROI gain</p>
        <p>$ power_bi --refresh</p>
        <p className="text-green-400/60">✓ 10 KPIs updated</p>
        <p>$ etl_pipeline.run()</p>
        <p className="text-green-400/60">✓ 30% time saved</p>
      </div>
    </motion.div>
  )
}

// ─── Staggered entrance variants ──────────────────────────────────────────────
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const heroItem = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const typed = useTypewriter(typewriterPhrases)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Grid bg */}
      <motion.div
        className="absolute inset-0 hero-grid pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        aria-hidden="true"
      />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(34,211,238,0.11) 0%, transparent 65%)' }} aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 90% 90%, rgba(34,211,238,0.04) 0%, transparent 60%)' }} aria-hidden="true" />

      <SparklineDecoration />
      <TerminalCard />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={heroItem} className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-accent opacity-50" />
          <span className="font-mono text-accent text-[11px] tracking-[0.25em] uppercase font-medium px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            // DATA ANALYST
          </span>
          <span className="w-8 h-px bg-accent opacity-50" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={heroItem}
          className="text-5xl sm:text-6xl md:text-[5rem] font-extrabold text-text-primary mb-5 leading-[1.05] tracking-tight"
        >
          Arpit{' '}
          <span className="gradient-text">Manoj</span>{' '}
          Bangre
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={heroItem} className="h-8 mb-5 flex items-center justify-center">
          <p className="font-mono text-accent text-base sm:text-lg tracking-wide">
            <span className="opacity-40 mr-1">&gt;_</span>
            {typed}
            <span className="typewriter-cursor" aria-hidden="true" />
          </p>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={heroItem}
          className="text-xl sm:text-2xl text-text-secondary font-medium mb-4 max-w-2xl mx-auto leading-snug"
        >
          Turning raw data into decisions —{' '}
          <span className="text-text-primary font-semibold">Python</span>,{' '}
          <span className="text-text-primary font-semibold">SQL</span> &{' '}
          <span className="text-text-primary font-semibold">Power BI</span>.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          variants={heroItem}
          className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Data Analyst based in Nagpur, India — specializing in ETL pipelines, interactive dashboards, and data storytelling.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            id="hero-view-projects-btn"
            className="btn-primary text-base px-7 py-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(34,211,238,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            id="hero-get-in-touch-btn"
            className="btn-outline text-base px-7 py-3 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social row */}
        <motion.div variants={heroItem} className="flex items-center justify-center gap-6">
          {[
            { href: personal.github,            icon: Github,   label: 'GitHub'   },
            { href: personal.linkedin,          icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail,     label: 'Email'    },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-200 text-sm group"
              whileHover={{ y: -2 }}
            >
              <Icon size={16} />
              <span className="font-mono">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={13} className="animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
