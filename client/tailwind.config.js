/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#0095f6',
        blueSecondary: '#5259d6',
        grayPrimary: '#dbdbdb',
        graySecondary: '#262626',
      },
    },
  },
  plugins: [],
};
