import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { Badge } from './ui'

const cardVariant = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="card p-6 flex flex-col h-full group relative overflow-hidden"
      aria-labelledby={`project-title-${project.id}`}
      variants={cardVariant}
      whileHover={{
        y: -6,
        borderColor: 'rgba(34,211,238,0.4)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.5), 0 0 24px rgba(34,211,238,0.1)',
        transition: { duration: 0.25 },
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[0.75rem]"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)' }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="text-[9px] font-mono font-semibold bg-accent/10 border border-accent/25 text-accent px-1.5 py-0.5 rounded tracking-widest uppercase">
              featured
            </span>
          )}
        </div>
        <span className="font-mono text-text-muted text-xs">{project.year}</span>
      </div>

      {/* Title */}
      <h3
        id={`project-title-${project.id}`}
        className="text-text-primary font-bold text-base mb-4 group-hover:text-accent transition-colors duration-200 relative z-10 leading-snug"
      >
        {project.github || project.demo ? (
          <a
            href={project.github || project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none"
          >
            <span className="absolute inset-0 z-0" aria-hidden="true" />
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      {/* Bullets */}
      <ul className="flex flex-col gap-2.5 mb-5 flex-1 relative z-10" role="list">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
            <span className="text-text-secondary text-sm leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
        {project.stack.map(tech => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-bg-border relative z-10">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm font-medium"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm font-medium"
            aria-label={`Live demo of ${project.title}`}
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
        <motion.span
          className="ml-auto text-text-muted group-hover:text-accent"
          animate={{}}
          whileHover={{ x: 2, y: -2 }}
          transition={{ duration: 0.15 }}
          aria-hidden="true"
        >
          <ArrowUpRight size={15} />
        </motion.span>
      </div>
    </motion.article>
  )
}
