import { isProdOrGhpages } from '../project.config.babel';

export default {
  filename: 'index.html',
  template: './src/index.html',
  favicon: './src/favicon.ico',
  minify: isProdOrGhpages ? {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  } : false,
};
