/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#05c391',
        'accent-light': '#57DCB4',
        'accent-dark': '#00835B',
        'level-100': '#15151E',
        ground: '#1f1d2b',
        // 'darker-1': '#0D0D15',
      },
      fontFamily: {
        sans: ["'Karla'", ...defaultTheme.fontFamily.sans],
        // sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
        // sans: ["'Jost'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
