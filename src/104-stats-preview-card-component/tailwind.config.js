const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['"Inter"', 'serif'],
                lexend: ['Lexend Deca', 'serif']
            },
        },

        colors: {
            900: "#090b1a",
            800: "#1b1938",
            purple: "#aa5cdb",
            transparent: 'transparent',
            white: colors.white,
            gray: colors.slate,
        },
    },
}