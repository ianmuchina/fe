const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Change all fonts to block instead of swap.
function fontMust(x) {
  return {
    postcssPlugin: true,
    Declaration: {
      "font-display": node => {
        if (node.parent.name === "font-face" && node.parent.type === "atrule") {
          node.value = x;
        }
      },
    },
  };
}

module.exports = {
  plugins: [
    // Set 'font-display' to 'block' on all @font-face rules.
    fontMust("block"),
    tailwind(),
    autoprefixer(),
  ],
};
