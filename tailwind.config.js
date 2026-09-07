/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bccde2',
          300: '#9fb3d6',
          400: '#8299c9',
          500: '#6b7fb8',
          600: '#4a5d8f',
          700: '#2d3a5e',
          800: '#1a2438',
          900: '#0d1424',
          950: '#060b14',
        }
      },
    },
  },
  plugins: [],
}