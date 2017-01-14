import {
  NoErrorsPlugin,
  ProvidePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import project, { isProdOrGhpages } from './project.config.babel';
import htmlConfig from './plugins/html-webpack-plugin.config.babel';
import copyWebpackPlugin from './plugins/copy-webpack-plugin.babel';

const { OccurenceOrderPlugin } = optimize;

export default (extractCSS, vendors) => [
  extractCSS,
  copyWebpackPlugin,
  new OccurenceOrderPlugin(true),
  isProdOrGhpages ? undefined : new NoErrorsPlugin(),
  new HtmlWebpackPlugin(htmlConfig),
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
  }),
  new optimize.CommonsChunkPlugin(
    /* chunkName= */ vendors,
    /* filename= */ `${vendors}.js?v=${project.version}`
  ),
].filter(p => !!p);
