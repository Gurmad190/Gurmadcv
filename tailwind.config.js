/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900
          light: '#1e293b', // slate-800
          dark: '#020617', // slate-950
        },
        secondary: {
          DEFAULT: '#eab308', // yellow-500
          light: '#facc15', // yellow-400
          dark: '#ca8a04', // yellow-600
        },
        accent: {
          DEFAULT: '#64748b', // slate-500
          light: '#94a3b8', // slate-400
          dark: '#475569', // slate-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}