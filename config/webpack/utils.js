const { resolve } = require('path');
const { version } = require('../../package.json');

module.exports = {
  pathTo: rel => resolve(process.cwd(), rel),
  publicPath: env => env === 'ghpages' ? '/angularjs/' : '',
  jsonEnv: env => JSON.stringify(env !== 'development' ? 'production' : env),
  minimize: env => env !== 'development' ? '&minimize' : '',
  exclude: /\/(node_modules|bower_components)\//i,
  suffix: `v=${version}`,
};
