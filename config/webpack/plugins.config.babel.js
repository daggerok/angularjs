import {
  NoErrorsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';

import project, { isProdOrGhpages } from './project.config.babel';
import htmlConfig from './plugins/html-webpack-plugin.config.babel';
// import copyWebpackPlugin from './plugins/copy-webpack-plugin.babel';

const { OccurenceOrderPlugin } = optimize;

export default (extractCSS, vendors, suffix, baseHref) => [
  extractCSS,
  // copyWebpackPlugin,
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
    /* filename= */ `${vendors}.js?${suffix}`
  ),
  new BaseHrefWebpackPlugin({ baseHref, }),
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(isProdOrGhpages ? 'production' : 'development'),
    },
  }),
].filter(p => !!p);
