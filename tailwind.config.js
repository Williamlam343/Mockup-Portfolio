const colors = require('tailwindcss/colors')



module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        emerald: colors.emerald,
        amber: colors.amber,
        bluegray: colors.blueGray,
        warmgray: colors.warmGray,
        orange: colors.orange,
        sky: colors.sky,
      },
    }, 
    glow: {
      colors: { // Defaults to all theme colors
        blue: theme("colors.blue.100"),
        // ...
      },
      styles: { // Defaults to these values
        default: baseColor =>
          `0 1px 3px 0 rgba(${baseColor}, 0.4), 0 1px 2px 0 rgba(${baseColor}, 0.24)`,
        md: baseColor =>
          `0 4px 6px -1px rgba(${baseColor}, 0.4), 0 2px 4px -1px rgba(${baseColor}, 0.24)`,
        lg: baseColor =>
          `0 10px 15px -3px rgba(${baseColor}, 0.4), 0 4px 6px -2px rgba(${baseColor}, 0.20)`,
        xl: baseColor =>
          `0 20px 25px -5px rgba(${baseColor}, 0.4), 0 10px 10px -5px rgba(${baseColor}, 0.16)`,
        "2xl": baseColor => `0 25px 50px -12px rgba(${baseColor}, 1)`,
        outline: baseColor => `0 0 0 3px rgba(${baseColor}, 0.5)`,
        none: "none"
      }
  },
  variants: {
    extend: {},
  },
  plugins: [ 
    
    require("tailwindcss-glow"),
  
  ],
  }}
