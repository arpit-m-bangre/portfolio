export { default as StatCounter } from './StatCounter'
export { default as BackgroundParticles } from './BackgroundParticles'



export function Badge({ children, className = '' }) {
  return (
    <span className={`mono-tag ${className}`}>
      {children}
    </span>
  )
}

// Button variants
export function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const cls = variant === 'primary' ? `btn-primary ${className}` : `btn-outline ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  )
}

// Section heading with accent underline
export function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      <span className="section-heading-line mt-3" />
    </div>
  )
}
