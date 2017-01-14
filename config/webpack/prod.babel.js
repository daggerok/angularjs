import { DefinePlugin } from 'webpack';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';

import config from './common/config.babel';
import { profile, isGhpages } from './common/project.config.babel';

if ('ghpages' === profile) {
  config.output.publicPath = '/angularjs/';
}

config.devtool = isGhpages ? false : '#source-map';

config.plugins = [
  ...config.plugins,
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
