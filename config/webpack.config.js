const entry = require('./webpack/entry.config');
const resolve = require('./webpack/resolve.config');
const node = require('./webpack/node.config');

module.exports = env => ({
  entry,
  output: require('./webpack/output.config')(env),
  module: require('./webpack/module.config')(env),
  plugins: require('./webpack/plugins.config')(env),
  resolve,
  node,
  profile: 'web',
  devtool: env === 'development' ? 'eval' : 'source-map',
  devServer: require('./webpack/webpack-dev-server.config')(env),
  bail: true,
});
