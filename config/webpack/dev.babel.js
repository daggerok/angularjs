import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlConfig from './common/html.config.babel';
import config, { publicPath } from './common/config.babel';

config.output.sourceMapFilename = 'maps/[file].map';

config.plugins = [
  ...config.plugins,
  new HtmlWebpackPlugin({
    ...htmlConfig,
    minify: false,
  }),
];

export default {
  ...config,
  devtool: '#cheap-module-inline-source-map',
  devServer: {
    port: 8000,
    inline: true,
    progress: true,
    stats: 'minimal',
    historyApiFallback: {
      index: publicPath
    },
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false
      }
    }
  }
};
