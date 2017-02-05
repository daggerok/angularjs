import {
  NoErrorsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';

import { suffix } from './output.config.babel';
import { extractCSS } from './module.config.babel';
import { isProdOrGhpages } from './project.config.babel';

import htmlConfig from './plugins/html-webpack-plugin.config.babel';
// import copyWebpackPlugin from './plugins/copy-webpack-plugin.babel';
import providePluginConfig from './plugins/provide-plugin.config.babel';
import baseHrefWebpackPluginConfig from './plugins/base-href-webpack-plugin.config.babel';
import definePluginConfig from './plugins/define-plugin.config.babel';
import uglifyJsPluginConfig from './plugins/uglify-js-plugin.config';


const {
  OccurenceOrderPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
} = optimize;

export const vendors = 'vendors';

export default [
  extractCSS,
  // copyWebpackPlugin,
  new OccurenceOrderPlugin(true),
  isProdOrGhpages ? undefined : new NoErrorsPlugin(),
  new HtmlWebpackPlugin(htmlConfig),
  new ProvidePlugin(providePluginConfig),
  new CommonsChunkPlugin(
    /* chunkName= */ vendors,
    /* filename= */ `${vendors}.js?${suffix}`
  ),
  new BaseHrefWebpackPlugin(baseHrefWebpackPluginConfig),
  new DefinePlugin(definePluginConfig),
  isProdOrGhpages ? new UglifyJsPlugin(uglifyJsPluginConfig) : undefined,
].filter(plugin => !!plugin);
