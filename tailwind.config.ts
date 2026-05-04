import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Spiritual luxury palette
        'teal': {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#134e4a',
          900: '#0f2f2e',
        },
        'saffron': {
          50: '#fffbea',
          100: '#fff3c7',
          200: '#ffe680',
          300: '#ffd740',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ff8f00',
          800: '#ff6d00',
          900: '#e65100',
        },
        'gold': {
          50: '#fffaeb',
          100: '#fff3c7',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff6f00',
          900: '#e65100',
        },
        'crimson': {
          50: '#fff5f7',
          100: '#ffe0e6',
          200: '#ffc0d9',
          300: '#ff8ab9',
          400: '#ff5a92',
          500: '#d32f2f',
          600: '#b71c1c',
          700: '#8b0000',
          800: '#5c0000',
          900: '#2e0000',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
