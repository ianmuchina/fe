let manifest = require("../../.lhci/manifest.json");

let ans = manifest
  .filter(t => t.isRepresentativeRun)
  .map(t => ({
    ...t,
    url: new URL(t.url).pathname,
  }));

module.exports = () => ans;
