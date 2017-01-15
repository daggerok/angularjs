import CopyWebpackPlugin from 'copy-webpack-plugin';

export default new CopyWebpackPlugin([
  { from: './src/icons', to: 'icons' },
]);
