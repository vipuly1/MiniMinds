/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'hind-madurai' : ['Hind Madurai', 'sans-serif']
      },
      screens:{
        'xs': {max:'390px'},
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
