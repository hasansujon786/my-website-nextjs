/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
        'darker-1': '#18181B',
        'darker-2': '#131316',
      },
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
