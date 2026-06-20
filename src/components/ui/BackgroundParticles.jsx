import { useEffect, useRef } from 'react'

export default function BackgroundParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()

    // Create drifting particles
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 30000))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.25, // slow drift speed
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
        alphaSpeed: Math.random() * 0.003 + 0.001,
        growing: Math.random() > 0.5
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p) => {
        // Update position
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width
        else if (p.x > canvas.width) p.x = 0
        
        if (p.y < 0) p.y = canvas.height
        else if (p.y > canvas.height) p.y = 0

        // Update alpha (glowing pulse effect)
        if (p.growing) {
          p.alpha += p.alphaSpeed
          if (p.alpha >= 0.6) p.growing = false
        } else {
          p.alpha -= p.alphaSpeed
          if (p.alpha <= 0.1) p.growing = true
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})` // Cyan-400
        ctx.shadowBlur = p.radius * 3
        ctx.shadowColor = '#22D3EE'
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-50"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}
