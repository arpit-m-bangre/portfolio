import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personal } from '../data/portfolioData'
import { fadeUp, viewport } from '../utils/animations'

const socialLinks = [
  { icon: Github,   href: personal.github,            label: 'GitHub'   },
  { icon: Linkedin, href: personal.linkedin,          label: 'LinkedIn' },
  { icon: Mail,     href: `mailto:${personal.email}`, label: 'Email'    },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <motion.footer
      className="bg-bg-surface border-t border-bg-border"
      role="contentinfo"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-text-muted text-xs font-mono text-center sm:text-left">
            © 2026{' '}
            <span className="text-text-secondary">Arpit Manoj Bangre</span>
            {' '}· Built with React & Tailwind.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="text-text-muted hover:text-accent transition-colors p-1.5 rounded-md hover:bg-bg-card"
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon size={16} />
                </motion.a>
              )
            })}
          </div>

          <motion.button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors text-xs font-mono"
            aria-label="Back to top"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
          >
            <ArrowUp size={13} aria-hidden="true" />
            Back to top
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}
