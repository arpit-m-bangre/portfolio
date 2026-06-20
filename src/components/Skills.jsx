import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import { SectionHeading, Badge } from './ui'
import { fadeLeft, staggerContainer, staggerItem, viewport } from '../utils/animations'

const categoryColors = {
  'Languages':      '#22D3EE',
  'Databases':      '#2DD4BF',
  'Data Analysis':  '#38BDF8',
  'Visualization':  '#818CF8',
  'Tools':          '#FB923C',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-bg-surface pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeading eyebrow="// skills" title="Technical Skills" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Staggered card grid for skills */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {skillGroups.map(group => {
              const accent = categoryColors[group.category] ?? '#22D3EE'
              return (
                <motion.div 
                  key={group.category} 
                  variants={staggerItem}
                  className="card p-6 relative overflow-hidden flex flex-col h-full"
                  whileHover={{
                    y: -4,
                    borderColor: accent,
                    boxShadow: `0 12px 30px rgba(0,0,0,0.4), 0 0 18px ${accent}15`,
                    transition: { duration: 0.25 }
                  }}
                >
                  {/* Subtle corner glow matching category color */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-[0.03]"
                    style={{ background: `radial-gradient(circle at 100% 0%, ${accent}, transparent)` }}
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ 
                        background: accent, 
                        boxShadow: `0 0 8px ${accent}` 
                      }}
                      aria-hidden="true"
                    />
                    <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.skills.map(skill => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Badge>{skill}</Badge>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="section-divider mt-24" aria-hidden="true" />
      </div>
    </section>
  )
}
