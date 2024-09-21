/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSerif : ['DM Serif Display', 'sans-serif'],
        DMSans : ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

