import { isProdOrGhpages } from './project.config.babel';
import { publicPath } from './output.config.babel';

const proxy = () => ({
  target: 'http://localhost:8080',
  secure: false,
});

export default isProdOrGhpages ? false : {
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',
  historyApiFallback: {
    index: publicPath,
  },
  proxy: {
    '/api': proxy(),
  },
};
