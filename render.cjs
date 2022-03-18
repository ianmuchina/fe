let manifest = require("./.lhci/manifest.json");

let ans = manifest
  .filter(t => t.isRepresentativeRun)
  .map(t => ({
    ...t,
    url: new URL(t.url).pathname,
  }));

const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
};

function icon(score) {
  if (score > 90) {
    return `${colors.FgGreen}●${colors.Reset}`;
  }

  if (score <= 90) {
    return `${colors.FgYellow}■${colors.Reset}`;
  }

  if (score <= 50) {
    return `${colors.FgRed}▲${colors.Reset}`;
  }
}

let s = t => {
  console.log(
    `${colors.Dim}`,
    `${"-".repeat(t.url.slice(1).replace("/index.html", "").length)}\n`,
    `${t.url.slice(1).replace("/index.html", "")}\n`,
    `${"-".repeat(t.url.slice(1).replace("/index.html", "").length)}`,
    `${colors.Reset}\n`,
    `${icon(t.summary.performance * 100)}`,
    `Performance:    ${t.summary.performance * 100}\n`,
    `${icon(t.summary.accessibility * 100)}`,
    `Accessibility:  ${t.summary.accessibility * 100}\n`,
    `${icon(t.summary["best-practices"] * 100)}`,
    `Best Practices: ${t.summary["best-practices"] * 100}\n`,
    `${icon(t.summary.accessibility * 100)}`,
    `SEO:            ${t.summary.accessibility * 100}\n`
  );
};

let summary = () => ans.forEach(t => s(t));

summary();
