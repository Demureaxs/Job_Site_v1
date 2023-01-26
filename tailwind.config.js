/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#ff7f0e',
        colorPrimaryDark: '#f06406',
        colorSecondary: '#0b323e',
        colorSecondaryDark: '#0a2732',
        colorTertiary: '#3A5743',
        colorGrey: '#CACFD6',
        colorGreyDark: '#b4bac5',
        colorWhite: '#F4F9E9',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
