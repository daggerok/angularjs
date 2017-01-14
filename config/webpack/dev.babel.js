import config, { publicPath } from './common/config.babel';
import project from './common/project.config.babel';

config.output.sourceMapFilename = `[file].map?v=${project.version}`;

const proxy = () => ({
  target: 'http://localhost:8080',
  secure: false,
});

export default {
  ...config,
  devtool: '#eval',
  devServer: {
    port: 8000,
    inline: true,
    progress: true,
    stats: 'minimal',
    historyApiFallback: {
      index: publicPath,
    },
    proxy: {
      '/api': proxy(),
    }
  }
};
