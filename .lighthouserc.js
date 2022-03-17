const solutions = require("./docs/_data/solutions.cjs");

const x = solutions
  .filter(s => s.completed)
  .map(s => `http://localhost/${s.dir}/index.html`)
  .concat(["index.html"])

console.log(x)
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: x,
    },
  },
};
