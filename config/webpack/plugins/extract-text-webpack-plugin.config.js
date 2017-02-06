const {
  suffix,
  publicPath,
} = require('../utils');

module.exports = env => ({
  filename: '[name].css?' + suffix,
  disable: false,
  allChunks: true,
  publicPath: publicPath(env),
});
