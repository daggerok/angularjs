import config from './common.babel';

config.output.sourceMapFilename = 'maps/[file].map';

export default {
  ...config,

  devtool: '#cheap-module-inline-source-map',

  devServer: {
    port: 8000,
    historyApiFallback: true,
    progress: true,
    inline: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};
