import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0c1209',
        bg2: '#111a0e',
        bg3: '#162011',
        bg4: '#1d2d17',
        gold: '#c9a84c',
        'gold-light': '#e8cc82',
        'gold-dim': 'rgba(201,168,76,0.08)',
        'gold-mid': 'rgba(201,168,76,0.18)',
        'gold-glow': 'rgba(201,168,76,0.12)',
        text: '#f0ede6',
        muted: '#8a9985',
        dim: '#3d4d38',
        teal: '#3db89a',
        border: 'rgba(255,255,255,0.07)',
        'border-mid': 'rgba(255,255,255,0.12)',
        'border-strong': 'rgba(255,255,255,0.2)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        DEFAULT: '8px',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 4s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
        spin: 'spin 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
