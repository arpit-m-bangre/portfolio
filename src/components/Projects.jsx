import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { SectionHeading } from './ui'
import ProjectCard from './ProjectCard'
import { fadeUp, staggerContainer, viewport } from '../utils/animations'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative" aria-labelledby="projects-heading">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <SectionHeading eyebrow="// projects" title="Featured Projects" />
        </motion.div>

        {/* Staggered card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a
            href="https://github.com/arpit-m-bangre"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View All on GitHub
          </motion.a>
        </motion.div>

        <div className="section-divider mt-24" aria-hidden="true" />
      </div>
    </section>
  )
}
