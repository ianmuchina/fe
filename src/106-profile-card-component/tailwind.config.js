const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Kumbh Sans"', 'sans'],
            },
        },

        colors: {
            cyan: "#19a2ae",
            desaturated_blue: "#2d3248",
            grayish_blue: "#6a6f81",
            gray: "#969696",
            white: colors.white,
            gray: colors.slate,
        },
    },
}