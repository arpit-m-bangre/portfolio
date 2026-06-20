/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background layers
        bg: {
          base:    '#0A0E14',
          surface: '#0D1117',
          card:    '#161B22',
          border:  '#21262D',
          muted:   '#30363D',
        },
        // Accent — electric teal/cyan
        accent: {
          DEFAULT: '#22D3EE',
          dim:     '#0E7490',
          glow:    '#22D3EE33',
        },
        // Text
        text: {
          primary:   '#E6EDF3',
          secondary: '#8B949E',
          muted:     '#484F58',
          accent:    '#22D3EE',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem',  { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        'card':         '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)',
        'card-hover':   '0 8px 30px rgba(0,0,0,0.5)',
        'accent-glow':  '0 0 20px rgba(34, 211, 238, 0.15)',
        'accent-glow-lg': '0 0 40px rgba(34, 211, 238, 0.2)',
      },
      borderColor: {
        DEFAULT: '#21262D',
      },
      animation: {
        'pulse-slow':  'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':       'float 6s ease-in-out infinite',
        'grid-drift':  'gridDrift 20s linear infinite',
        'typewriter':  'typewriter 0.5s steps(1) forwards',
        'blink':       'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        gridDrift: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(34, 211, 238, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.04) 1px, transparent 1px)
        `,
        'dot-pattern': `radial-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid':  '40px 40px',
        'dots':  '24px 24px',
      },
    },
  },
  plugins: [],
}
