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
        grayText: '#8e8e8e',
        bgColorPrimary: '#fafafa',
      },
    },
  },
  plugins: [],
};
