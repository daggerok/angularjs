const historyApiFallback = require('connect-history-api-fallback');
const httpProxyMiddleware = require('http-proxy-middleware');

module.exports = (bs) => ({
  port: 3000,
  files: [
    './app/index.html',
    './app/dist/**/*.*',
    './app/src/**/*.css',
  ],
  watchOptions: {
    ignored: [
      './node_modules',
      './app/vendors',
    ],
  },
  server: {
    always: 'index.html',
    baseDir: './app',
    middleware: {
      // historyApiFallback
      // overrides the second middleware default with new settings
      1: historyApiFallback({
        index: '/index.html',
        verbose: true,
      }),
      // proxy
      2: httpProxyMiddleware('/api', {
        target: 'http://localhost:8080',
        changeOrigin: true,
        logLevel: 'debug'
      }),
    },
  }
});
