// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#202022",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
