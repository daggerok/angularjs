const {
  pathTo,
  suffix,
  publicPath,
} = require('./utils');

const staticDir = './dist';

module.exports = env => ({
  publicPath: publicPath(env),
  path: pathTo(staticDir),
  filename: `[name].js?${suffix}`,
  sourceMapFilename: `[file].map?${suffix}`,
  chunkFilename: `[id].chunk.js?${suffix}`,
  jsonpFunction: 'w',
});
