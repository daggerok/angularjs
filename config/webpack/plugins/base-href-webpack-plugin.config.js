const { publicPath } = require('../utils');

module.exports = env => ({
  baseHref: publicPath(env),
});
