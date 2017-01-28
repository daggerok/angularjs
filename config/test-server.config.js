const historyFallback = require('connect-history-api-fallback');

module.exports = {
  watchOptions: {},
  ghostMode: false,
  online: false,
  ui: false,
  injectChanges: false,
  reloadOnRestart: false,
  open: false,
  notify: false,
  port: 3000,
  files: [
    './src/**/*.*',
  ],
  logLevel: 'silent',
  server: {
    middleware: {
      0: null,
      // overrides the second middleware default with new settings
      1: historyFallback({
        index: '/index.html',
        verbose: false,
      }),
    },
    baseDir: './dist/',
  }
};
