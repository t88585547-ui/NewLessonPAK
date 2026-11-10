/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F3EEE7',
          soft: '#F9F6F1',
          muted: '#EAE3D8',
        },
        paper: {
          DEFAULT: '#E8E1D7',
          light: '#F3EFE9',
          dark: '#DBD1C4',
          line: '#D5CABE',
        },
        ink: {
          DEFAULT: '#191715',
          soft: '#332F2B',
          muted: '#635D56',
          light: '#8E867E',
          faint: '#B8B0A5',
        },
        ocean: {
          DEFAULT: '#254E68',
          deep: '#183648',
          soft: '#366786',
          light: '#E7EFF4',
        },
        wave: {
          DEFAULT: '#83AFC0',
          light: '#A3C6D3',
          soft: '#C4DDE6',
          mist: '#EDF5F8',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', '"IBM Plex Sans Thai"', 'sans-serif'],
        display: ['"Manrope"', '"IBM Plex Sans Thai"', 'sans-serif'],
        thai: ['"IBM Plex Sans Thai"', '"Manrope"', 'sans-serif'],
        editorial: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '-0.035em',
        wide: '0.04em',
        widest: '0.12em',
      },
      lineHeight: {
        tighter: '1.05',
        tight: '1.15',
      },
      boxShadow: {
        paper: '0 4px 24px -2px rgba(25, 23, 21, 0.05), 0 1px 4px -1px rgba(25, 23, 21, 0.03)',
        'paper-lift': '0 20px 45px -15px rgba(25, 23, 21, 0.08), 0 2px 8px -2px rgba(25, 23, 21, 0.04)',
        float: '0 30px 60px -20px rgba(37, 78, 104, 0.12), 0 12px 24px -10px rgba(25, 23, 21, 0.06)',
        subtle: '0 2px 10px rgba(25, 23, 21, 0.03)',
      },
      borderRadius: {
        editorial: '4px',
        card: '8px',
        floating: '12px',
      },
    },
  },
  plugins: [],
}
