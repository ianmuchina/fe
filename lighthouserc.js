// Runs lighthouse on all completed challenges in docs/_data/solutions.cjs
// Array of completed solutions
const solutions = require("./docs/_data/solutions.cjs");

const completed = solutions
  .filter(s => s.completed)
  .map(s => `http://localhost/${s.dir}/index.html`)
  .concat(["index.html"]);

console.log(completed);

module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist",
      url: [
        ...completed,
        // 'index.html',
        // 'http://localhost/101-qr-code-component/index.html',
        // "http://localhost/102-nft-preview-card-component/index.html",
        // 'http://localhost/103-order-summary-component/index.html',
        // 'http://localhost/104-stats-preview-card-component/index.html',
        // 'http://localhost/105-3-column-preview-card-component/index.html',
        // 'http://localhost/106-profile-card-component/index.html',
        // 'http://localhost/107-faq-accordion-card/index.html',
        // 'http://localhost/108-social-proof-section/index.html',
        // 'http://localhost/109-article-preview-component/index.html',
        // 'http://localhost/110-four-card-feature-section/index.html',
        // 'http://localhost/111-base-apparel-coming-soon/index.html',
        // 'http://localhost/220-advice-generator-app/index.html',
      ],
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
    upload: {
      target: "filesystem",
      outputDir: ".lhci",
    },
    server: {
      storage: {
        storageMethod: "sql",
        sqlDialect: "sqlite",
        sqlDatabasePath: "./lhci.db",
      },
    },
  },
  wizard: {},
};
