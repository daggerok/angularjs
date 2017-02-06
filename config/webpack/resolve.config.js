const { pathTo } = require('./utils');

module.exports = {
  extensions: [
    '.js',
    '.css',
    '.scss',
    '.less',
    '.styl',
  ],
  modules: [
    pathTo('./src'),
    'node_modules',
  ],
};
