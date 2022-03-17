const solutions = require("./docs/_data/solutions.cjs");

module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      urls: solutions
        .filter(s => s.completed)
        .map(s => `${s.dir}/index.html`)
        .concat(["index.html"]),
    },
  },
};
