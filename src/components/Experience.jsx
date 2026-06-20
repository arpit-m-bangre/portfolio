import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { SectionHeading } from './ui'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../utils/animations'

function BulletText({ bullet }) {
  if (!bullet.metric) {
    return <p className="text-text-secondary text-sm leading-relaxed">{bullet.text}</p>
  }
  return (
    <p className="text-text-secondary text-sm leading-relaxed">
      {bullet.text}{' '}
      <span className="inline-flex items-center font-mono text-[12px] font-semibold text-accent bg-accent/10 border border-accent/20 rounded px-1.5 py-0.5 mx-0.5 whitespace-nowrap">
        {bullet.metric}
      </span>
      {bullet.textAfter}
    </p>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeading eyebrow="// experience" title="Work Experience" />
        </motion.div>

        <div className="max-w-3xl flex flex-col gap-8">
          {experience.map((job, jobIdx) => (
            <motion.div
              key={job.id}
              className="relative pl-6 timeline-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: jobIdx * 0.1 }}
            >
              <motion.article
                className="card p-6 ml-4 relative overflow-hidden"
                whileHover={{ borderColor: 'rgba(34,211,238,0.35)', boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(34,211,238,0.08)', transition: { duration: 0.25 } }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-[0.04]"
                  style={{ background: 'radial-gradient(circle at 0% 0%, #22D3EE, transparent)' }}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-text-primary font-bold text-lg mb-1">{job.role}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-accent font-semibold text-sm">{job.company}</span>
                      <span className="text-text-muted text-xs font-mono px-2 py-0.5 rounded bg-bg-surface border border-bg-border">
                        {job.companyDesc}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <div className="flex items-center gap-1.5 text-text-secondary font-mono text-xs">
                      <Calendar size={11} aria-hidden="true" /> {job.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs">
                      <MapPin size={11} aria-hidden="true" /> {job.location}
                    </div>
                  </div>
                </div>

                {/* Gradient divider */}
                <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.3) 0%, rgba(33,38,45,0.4) 100%)' }} aria-hidden="true" />

                {/* Bullets — staggered */}
                <motion.ul
                  className="flex flex-col gap-3.5"
                  variants={staggerContainer(0.08, 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  role="list"
                >
                  {job.bullets.map((bullet, i) => (
                    <motion.li key={i} variants={staggerItem} className="flex gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                        style={{ boxShadow: '0 0 4px rgba(34,211,238,0.6)' }}
                        aria-hidden="true"
                      />
                      <BulletText bullet={bullet} />
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            </motion.div>
          ))}
        </div>

        <div className="section-divider mt-24" aria-hidden="true" />
      </div>
    </section>
  )
}
