import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { education } from '../data/portfolioData'
import { SectionHeading } from './ui'
import { fadeUp, viewport } from '../utils/animations'

export default function Education() {
  return (
    <section id="education" className="py-24 relative" aria-labelledby="education-heading">
      <div className="absolute inset-0 bg-bg-surface pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeading eyebrow="// education" title="Education" />
        </motion.div>

        <div className="max-w-3xl flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="relative pl-6 timeline-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
            >
              <motion.article
                className="card p-6 ml-4"
                whileHover={{
                  borderColor: 'rgba(34,211,238,0.35)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 16px rgba(34,211,238,0.07)',
                  transition: { duration: 0.25 },
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex gap-4 items-start">
                    <div className="mt-0.5 p-2 rounded-md bg-accent/10 border border-accent/20 shrink-0">
                      <GraduationCap size={18} className="text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-bold text-base mb-1">{edu.degree}</h3>
                      <p className="text-accent font-semibold text-sm mb-0.5">{edu.institution}</p>
                      <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs">
                        <MapPin size={11} aria-hidden="true" /> {edu.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-secondary font-mono text-xs shrink-0">
                    <Calendar size={11} aria-hidden="true" /> {edu.period}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

        <div className="section-divider mt-24" aria-hidden="true" />
      </div>
    </section>
  )
}
