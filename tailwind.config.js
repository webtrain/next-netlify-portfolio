/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      wiseScreen: '1536px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      screens: {
        ultraWideScreen: '1900px',
      },
    },
  },
  plugins: [],
}
