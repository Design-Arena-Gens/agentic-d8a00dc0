import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f0ff',
          200: '#aee0ff',
          300: '#75c9ff',
          400: '#39a9ff',
          500: '#0b86ff',
          600: '#0068e6',
          700: '#0052b4',
          800: '#003f8a',
          900: '#0a336b'
        }
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 10%) 1px, transparent 0)',
        'radial-glow': 'radial-gradient(60% 60% at 50% 0%, rgba(11,134,255,0.25), rgba(11,134,255,0) 60%)'
      }
    }
  },
  plugins: []
} satisfies Config
