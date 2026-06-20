import { motion } from 'framer-motion'
import { personal, stats } from '../data/portfolioData'
import { SectionHeading, StatCounter } from './ui'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: text (slides from left) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <SectionHeading eyebrow="// about" title="About Me" />

            <p className="text-text-secondary text-base leading-relaxed mb-8">
              {personal.summary}
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-bg-card border border-bg-border">
              <span className="status-dot" aria-hidden="true" />
              <span className="text-text-secondary text-xs font-mono tracking-wide">
                Open to Data Analyst opportunities
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Python · SQL · Power BI', 'ETL Pipelines', 'Nagpur, India'].map(label => (
                <span key={label} className="font-mono text-xs text-text-secondary border border-bg-border rounded-md px-3 py-1.5 bg-bg-card">
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: stat chips (staggered from right) ── */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="card p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden"
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="text-4xl font-extrabold text-accent mb-1.5 relative z-10">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted text-[11px] font-mono uppercase tracking-widest relative z-10">
                  {stat.label}
                </div>
                <div
                  className="absolute top-0 right-0 w-12 h-12 opacity-[0.06]"
                  style={{ background: 'conic-gradient(from 180deg at 100% 0%, #22D3EE, transparent)' }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="section-divider mt-24" aria-hidden="true" />
    </section>
  )
}
