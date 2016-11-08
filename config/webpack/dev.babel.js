import config from './common/config.babel';

config.output.sourceMapFilename = 'maps/[file].map';

export default {
  ...config,

  devtool: '#cheap-module-inline-source-map',

  devServer: {
    port: 8000,
    inline: true,
    progress: true,
    stats: 'minimal',

    historyApiFallback: {
      index: '/'
    },

    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false
      }
    }
  }
};
