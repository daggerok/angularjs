const { pathTo } = require('../utils');
const babel = require('./babel.config');
const postcss = require('./postcss.config');
const eslint = require('./eslint.config');

module.exports = env => ({
  options: {
    context: pathTo('.'),
    babel,
    postcss,
    eslint: eslint(env),
  },
  minimize: env === 'production',
  debug: env !== 'production',
});
