import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forma-black':    '#0A0A0A',
        'forma-white':    '#F5F3EF',
        'forma-gold':     '#C8A96E',
        'forma-gold-dark':'#A8873E',
        'forma-text':     '#1A1A1A',
        'forma-muted':    '#6B6560',
        'forma-divider':  '#E2DDD8',
        'forma-surface':  '#EDEBE6',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-dm-mono)',    'Consolas',  'monospace'],
      },
      letterSpacing: {
        'label': '0.18em',
        'wide-2': '0.12em',
      },
      maxWidth: {
        'site': '1440px',
      },
      height: {
        'screen-90': '90vh',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
