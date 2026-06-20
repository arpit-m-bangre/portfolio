import { motion } from 'framer-motion'
import { Award, Trophy, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import { SectionHeading } from './ui'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

const iconMap = { certification: Award, achievement: Trophy }

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative" aria-labelledby="certifications-heading">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeading eyebrow="// certifications" title="Certifications & Achievements" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {certifications.map(cert => {
            const Icon = iconMap[cert.type] ?? Award
            return (
              <motion.article
                key={cert.id}
                className="card p-6 flex flex-col gap-4 group relative overflow-hidden"
                aria-labelledby={`cert-title-${cert.id}`}
                variants={staggerItem}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(34,211,238,0.35)',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.45), 0 0 20px rgba(34,211,238,0.08)',
                  transition: { duration: 0.25 },
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)' }}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <motion.div
                    className="p-2.5 rounded-xl bg-accent/10 border border-accent/20"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </motion.div>
                  <span className="font-mono text-text-muted text-xs bg-bg-surface border border-bg-border rounded px-2 py-0.5">
                    {cert.year}
                  </span>
                </div>

                <div className="flex-1">
                  <h3
                    id={`cert-title-${cert.id}`}
                    className="text-text-primary font-bold text-sm mb-1.5 leading-snug group-hover:text-accent transition-colors duration-200"
                  >
                    {cert.title}
                  </h3>
                  <p className="text-accent text-xs font-mono mb-2.5 opacity-80">{cert.issuer}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{cert.description}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:underline underline-offset-2 mt-1"
                  aria-label={`View credential: ${cert.title}`}
                >
                  View Credential <ExternalLink size={12} aria-hidden="true" />
                </a>
              </motion.article>
            )
          })}
        </motion.div>

        <div className="section-divider mt-24" aria-hidden="true" />
      </div>
    </section>
  )
}
