const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
    theme: {
        colors: {
          ...colors,
            primary:"#dc2626",
            secondary:"#f5f5f5",
            tertiary:"#27272a",
          },
        fontFamily: { 
            Montserrat: ["Monserrat", "sans-serif"],
          },
      extend: {
        backgroundImage: {
            'moonKnight': "url('../img/MoonKnight.png')",
            'sanFrancisco': "url('../img/sanFrancisco.jpg')",
            'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
            'yosemite': "url('../img/yosemite.jpg')",
            'LA': "url('../img/LA.jpg')",
            'seattle': "url('../img/seattle.jpg')",
            'new_york': "url('../img/new_york.jpg')",
            'norway': "url('../img/norway.jpg')",
            'sydney': "url('../img/sydney.jpg')",
            'miami': "url('../img/miami.jpg')",
            'switzerland': "url('../img/switzerland.jpg')",
            'bali': "url('../img/bali.jpg')",
            'norway': "url('../img/norway.jpg')",
            'chicago': "url('../img/chicago.jpg')",
            'europe': "url('../img/europe.jpg')",
            'iceland': "url('../img/iceland.jpg')",
        }
      },
    },
    plugins: [],
  }