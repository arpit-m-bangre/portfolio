import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { personal } from '../data/portfolioData'
import { SectionHeading } from './ui'
import { fadeLeft, staggerContainer, staggerItem, viewport } from '../utils/animations'

const contactChips = [
  { id: 'email-chip',    icon: Mail,     label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { id: 'phone-chip',    icon: Phone,    label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
  { id: 'linkedin-chip', icon: Linkedin, label: 'LinkedIn', value: 'arpitmbangre',    href: personal.linkedin },
  { id: 'github-chip',   icon: Github,   label: 'GitHub',   value: 'arpit-m-bangre',  href: personal.github },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-bg-surface pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <SectionHeading eyebrow="// contact" title="Have data that needs a story?" className="text-center" />
            <div className="inline-flex items-center gap-2 mb-12 px-3 py-1.5 rounded-full bg-bg-card border border-bg-border">
              <span className="status-dot" aria-hidden="true" />
              <span className="text-text-secondary text-xs font-mono tracking-wide">
                Open to Data Analyst opportunities
              </span>
            </div>
          </motion.div>

          {/* Contact chips (staggered & centered) */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {contactChips.map(chip => {
              const Icon = chip.icon
              return (
                <motion.a
                  key={chip.id}
                  id={chip.id}
                  href={chip.href}
                  target={chip.href.startsWith('http') ? '_blank' : undefined}
                  rel={chip.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card p-5 flex items-center gap-4 group text-left"
                  variants={staggerItem}
                  whileHover={{
                    y: -4,
                    borderColor: 'rgba(34,211,238,0.4)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 16px rgba(34,211,238,0.06)',
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-text-muted font-mono text-[10px] uppercase tracking-widest mb-0.5">{chip.label}</p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors font-mono">{chip.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
