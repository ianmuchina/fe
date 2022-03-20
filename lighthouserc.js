// Runs lighthouse on all completed challenges in docs/_data/solutions.cjs
// Array of completed solutions
const solutions = require("./docs/_data/solutions.cjs");
const completed = solutions
  .filter(s => s.completed)
  .map(s => `http://localhost/${s.dir}/index.html`)
  .concat(["index.html"]);

module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist",
      url: [...completed],
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
    upload: {
      target: "filesystem",
      outputDir: ".lhci",
    },
  },
};
