/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '6vh': '6vh',
        '94vh': '94vh',
        '10vh': '10vh'
      },
      colors: {
        'lightblue': '#3498db',
        'main-txt-color': '#ecf0f1',
        'mint-green': '#27ae60'
      },
      backgroundImage: {
        'main-img': "url('coral-main-img.jpg')"
      }
    },
    fontSize: {
      'not-found': '3rem',
      '3xl': '2rem',
      '1/5xl': '1.5rem',
      'carousel-text-title': '5rem'
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

