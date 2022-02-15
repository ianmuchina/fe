const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./index.html"],
    theme: {
        // Fonts
        extend: {
            fontFamily: {
                sans: ['"Kumbh Sans"', 'sans'],
            },
        },
        // Colors
        colors: {
            "dark-blue": "#1d1e35",
            "soft-red": "#f47c57",
            "soft-violet": "#af67e9",
            "soft-blue": "#6565e7",
            "text-1": "#4a4b5e",
            "text-2": "#787887",
            "dividers": "#e7e7e9",
            white: colors.white,
            gray: colors.slate,
        },
    },
}