/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary:"#ee7022",
        secondary: "#5C5C5E",
        dark: "#313133",
        "dark-2":"#28282A",
        light:"#F7F7F7"

      },
      fontFamily: {
        Boing: ["Boing", ...defaultTheme.fontFamily.sans],
      },

      fontFamily: {
        gedlight :["gedlight" ,...defaultTheme.fontFamily.sans ]
      }
      ,
      fontFamily: {
        ged:["ged" ,...defaultTheme.fontFamily.sans ]
      }
    },
  },
  plugins: [],
}