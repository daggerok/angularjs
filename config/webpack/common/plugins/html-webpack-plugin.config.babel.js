import { isProdOrGhpages } from '../project.config.babel';

export default {
  filename: 'index.html',
  template: './src/assets/index.html',
  favicon: './src/assets/favicon.ico',
  minify: isProdOrGhpages ? {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  } : false,
};
