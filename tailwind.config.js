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
          DEFAULT: '#7518EB',
          dark: '#190732',
          light: '#EDE1FF',
        },
        gold: {
          DEFAULT: '#FED03B',
          dark: '#C9A946',
        },
        neutral: {
          white: '#e8ccf9',
          beige: '#F3EBDD',
          plum: '#2E0434',
        },
      },
    },
  },
  plugins: [],
}
