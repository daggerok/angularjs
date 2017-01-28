const historyFallback = require('connect-history-api-fallback');

module.exports = {
  logLevel: 'silent',
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
  server: {
    baseDir: './dist/',
    middleware: {
      // overrides the second middleware default with new settings
      1: historyFallback({
        index: '/index.html',
        verbose: true,
      }),
    }
  }
};
