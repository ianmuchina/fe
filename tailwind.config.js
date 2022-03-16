const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      // prettier-ignore
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        bai_jamjuree: ["Bai Jamjuree", "sans-serif"],
        barlow_condensed: ["Barlow Condensed", "sans-serif"],
        barlow_semi_condensed: ["Barlow Semi Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        be_vietnam: ["Be Vietnam", "sans-serif"],
        big_shoulders_display: ["Big Shoulders Display", "Big Shoulders DisplayVariable", "sans-serif",],
        commissioner: ["Commissioner", "CommissionerVariable", "sans-serif"],
        dm_serif_display: ["Dm Serif Display", "sans-serif"],
        fraunces: ["Fraunces", "FrauncesVariable", "sans-serif"],
        inter: ["Inter", "InterVariable", "sans-serif"],
        josefin_sans: ["Josefin Sans", "Josefin SansVariable", "sans-serif"],
        karla: ["Karla", "KarlaVariable", "sans-serif"],
        kumbh_sans: ["Kumbh Sans", "Kumbh SansVariable", "sans-serif"],
        lexend_deca: ["Lexend Deca", "Lexend DecaVariable", "sans-serif"],
        libre_franklin: ["Libre Franklin", "Libre FranklinVariable", "sans-serif",],
        manrope: ["Manrope", "ManropeVariable", "sans-serif"],
        montserrat: ["Montserrat", "MontserratVariable", "sans-serif"],
        nunito_sans: ["Nunito Sans", "sans-serif"],
        open_sans: ["Open Sans", "Open SansVariable", "sans-serif"],
        outfit: ["Outfit", "OutfitVariable", "sans-serif"],
        overpass: ["Overpass", "OverpassVariable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        public_sans: ["Public Sans", "Public SansVariable", "sans-serif"],
        raleway: ["Raleway", "RalewayVariable", "sans-serif"],
        red_hat_display: ["Red Hat Display", "Red Hat DisplayVariable", "sans-serif",],
        red_hat_text: ["Red Hat Text", "Red Hat TextVariable", "sans-serif"],
        rubik: ["Rubik", "RubikVariable", "sans-serif"],
        space_mono: ["Space Mono", "sans-serif"],
        spartan: ["Spartan", "SpartanVariable", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
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
