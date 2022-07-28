const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
    theme: {
        colors: {
          ...colors,
            primary:"#581c87",
            secondary:"#f5f5f5",
            tertiary:"#27272a",
          },
        fontFamily: { 
            Montserrat: ["Monserrat", "sans-serif"],
          },
      extend: {
        backgroundImage: {
            'moonKnight': "url('../img/MoonKnight.png')",
            'portada': "url('../img/portada.jpg')",
            'sanFrancisco': "url('../img/sanFrancisco.jpg')",
            'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        }
      },
    },
    plugins: [],
  }