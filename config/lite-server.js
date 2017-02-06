const connectHistoryApiFallback = require('connect-history-api-fallback');

module.exports = {
  port: 8001,
  files: [
    './src/**/*.*',
  ],
  server: {
    baseDir: './dist/',
    middleware: {
      // overrides the second middleware default with new settings
      1: connectHistoryApiFallback({
        index: '/index.html',
        verbose: true,
      }),
    }
  }
};
