// postcss.config.js
const postcssJitProps = require("postcss-jit-props");

const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const OpenProps = require("open-props");

// Change all fonts to block instead of swap.
const fontMust = x => {
  return {
    postcssPlugin: true,
    Declaration: {
      "font-display": node => {
        if (node.parent.name === "font-face" && node.parent.type === "atrule")
          node.value = x;
      },
    },
  };
};

module.exports = {
  plugins: [
    // Set 'font-display' to 'swap' on all @font-face rules
    fontMust("block"),
    // Use open props without importing the css file
    postcssJitProps(OpenProps),
    //Taiwlind
    tailwindcss(),
    // Minify css
    cssnano(),
    // Backport css and ensure it works on most browsers
    autoprefixer(),
    postcssPresetEnv(),
  ],
};
