/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A3A3',
        secondary: '#005C73',
        accent: '#00E5B0',
        dark: '#0A1A1F',
        darker: '#050D0F',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom right, rgba(0,163,163,0.1), rgba(0,92,115,0.1))',
      },
    },
  },
  plugins: [],
};