/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'verity-neon': '#0ff', // neon accent color
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff',
          },
          '50%': {
            textShadow:
              '0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff',
          },
        },
        cardHoverGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,255,255,0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(255,255,255,0.25)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        cardGlow: 'cardHoverGlow 2s ease-in-out infinite',
      },
      boxShadow: {
        neon: '0 0 30px rgba(255,255,255,0.05)',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
