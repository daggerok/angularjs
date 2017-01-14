import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';

import config from './common/config.babel';
import htmlConfig from './common/html.config.babel';

if (process.env.NODE_ENV === 'ghpages') {
  config.output.publicPath = '/angularjs/';
}

config.devtool = '#source-map';
config.plugins = [
  ...config.plugins,
  new HtmlWebpackPlugin(htmlConfig),
  new BaseHrefWebpackPlugin({
    baseHref: config.output.publicPath,
  }),
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
  }),
];

export default config;
