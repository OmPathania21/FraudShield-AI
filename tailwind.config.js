/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#38bdf8',
          purple: '#a78bfa',
          red: '#fb7185',
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(56, 189, 248, 0.25)',
        danger: '0 0 24px rgba(251, 113, 133, 0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.09) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

