/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        fid: {
          black: '#000000',
          red: '#DC0000',
          white: '#F5F5F5',
          ash: '#A8A8A8',
          panel: '#0A0A0A',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(220, 0, 0, 0.38)',
        danger: '0 0 44px rgba(220, 0, 0, 0.45)',
        glass: '0 15px 50px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(220,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(220,0,0,0.08) 1px, transparent 1px)',
        vignette:
          'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,1) 100%)',
      },
      letterSpacing: {
        cinematic: '0.2em',
      },
    },
  },
  plugins: [],
}

