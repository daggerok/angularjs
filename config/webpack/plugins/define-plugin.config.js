const { jsonEnv } = require('../utils');

module.exports = env => ({
  'process.env': {
    NODE_ENV: jsonEnv(env),
    DEVELOPMENT: env === 'development',
  },
});
