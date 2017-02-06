const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = new CopyWebpackPlugin([
  { from: './src/icons', to: 'icons' },
]);
