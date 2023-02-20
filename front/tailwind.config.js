/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: ['dark'], //specific classes
  },
  theme: {
    extend: {
      fontFamily: {
        'h1': "'Monoton', cursive;",
        'h2': "'Fugaz One', cursive;",
        'h3': "'Mulish', sans-serif;",
      },
      colors: {
        'black-light': '#3A3A3A',
        'white-light': '#FDF8F1',
        'red-light': '#FA4238',
        'black-dark': '#0A1627',
        'gray-dark': '#3A3A3A',
        'red-dark': '#FE0039',
        'slate-dark': '#C1C1C1',
      },
    },
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
