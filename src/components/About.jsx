import { motion } from 'framer-motion'
import { personal, stats } from '../data/portfolioData'
import { SectionHeading, StatCounter } from './ui'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewport } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left: Profile Image (slides from left) ── */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Outer container with dashboard style borders and glowing corner accents */}
            <div className="relative group w-full max-w-[320px] aspect-[4/5] rounded-2xl border border-bg-border bg-bg-card/20 p-4 backdrop-blur-sm overflow-hidden hover:border-accent/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
              
              {/* Glowing accent corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl group-hover:border-accent transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl group-hover:border-accent transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl group-hover:border-accent transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/40 rounded-br-2xl group-hover:border-accent transition-colors duration-300" />

              {/* Radial background glow */}
              <div 
                className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 40%, rgba(34,211,238,0.15) 0%, transparent 60%)' }}
                aria-hidden="true"
              />
              
              {/* Metadata headers */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-muted select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  SYS.IMG_01
                </div>
                <div className="font-mono text-[9px] text-accent font-semibold tracking-wider select-none">
                  [SEC_01.ABOUT]
                </div>
              </div>
              
              {/* Photo frame */}
              <div className="w-full h-[calc(100%-24px)] rounded-xl border border-bg-border/80 overflow-hidden bg-bg-surface/90 relative flex items-end justify-center group-hover:border-accent/30 transition-colors duration-300">
                {/* Holographic dot grid background */}
                <div className="absolute inset-0 dot-grid opacity-[0.12] pointer-events-none" />

                <img 
                  src="/profile.png" 
                  alt={personal.name}
                  className="w-full h-full object-contain object-bottom relative z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Shadow overlay at the bottom for seamless blending */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-surface via-bg-surface/40 to-transparent opacity-95 z-20 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Text & Stats ── */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* About Text (slides from right) */}
            <motion.div
              variants={fadeRight}
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

            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer(0.1, 0.1)}
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
      </div>

      <div className="section-divider mt-24" aria-hidden="true" />
    </section>
  )
}
