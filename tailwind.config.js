/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary: {
          DEFAULT: "#7518EB",
          dark: "#190732",
          light: "#EDE1FF",
        },
        gold: {
          DEFAULT: "#FED03B",
          dark: "#C9A946",
        },
        neutral: {
          white: "#e8ccf9",
          beige: "#F3EBDD",
          plum: "#2E0434",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
     addUtilities({
        '.txt-size': {
          '@screen sm': {
            fontSize: '1.125rem',   // text-lg
            lineHeight: '1.75rem',
          },
          '@screen md': {
            fontSize: '1.25rem',    // text-xl
            lineHeight: '1.85rem',
          },
          '@screen xl': {
            fontSize: '1.25rem',    // text-xl
            lineHeight: '1.85rem',
          },
          '@screen 2xl': {
            fontSize: '1.25rem',    // text-xl
            lineHeight: '1.85rem',
          },
          '@screen 3xl': {
            fontSize: '1.6rem',       // ✅ big screen
            lineHeight: '2.5rem',
          },
        },
      })
    },
  ],
};
