const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"InterVariable"', "serif"],
        lexend: ["Lexend DecaVariable", "serif"],
        kumbh: ["Kumbh SansVariable", "serif"],
      },
    },

    colors: {
      // Global Colors
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: colors.red,
      green: colors.green,
      cyan: colors.cyan,
      lime: colors.lime,
      fuchsia: colors.fuchsia,
      amber: colors.amber,
      blue: colors.blue,
      // Solution Specific colors
      // Stats Preview Card
      104: {
        900: "#090b1a",
        800: "#1b1938",
        purple: "#aa5cdb",
      },
      // Profile Card Component
      106: {
        cyan: "#19a2ae",
        desaturated_blue: "#2d3248",
        grayish_blue: "#6a6f81",
        gray: "#969696",
      },
      // FAQ Accordion Card
      107: {
        "dark-blue": "#1d1e35",
        "soft-red": "#f47c57",
        "soft-violet": "#af67e9",
        "soft-blue": "#6565e7",
        "text-1": "#4a4b5e",
        "text-2": "#787887",
        dividers: "#e7e7e9",
      },
    },
  },
};
