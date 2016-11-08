const historyFallback = require('connect-history-api-fallback');
const staticDir = './dist';
const publicPath = '/angularjs/';

module.exports = {
  port: 3000,
  files: [
    `${staticDir}/**/*.*`,
  ],
  server: {
    always: 'index.html',
    baseDir: staticDir,
    middleware: {
      // overrides the second middleware default with new settings
      1: historyFallback({
        index: '/index.html',
        // index: publicPath,
        verbose: true,
      }),
    }
  },
  startPath: publicPath,
  serveStatic: [
    staticDir,
  ],
};
