/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      fraunces: ['Fraunces', 'sans-serif'],
    },
    extend: {
      colors: {
        darkPurple: '#24053E',
        davysGray: '#584D62',
        eucaplyptus: '#44FFA1',
        ghostWhite: '#FCF8FF',
      },
    },
  },
  plugins: [],
};
