import config from './common.babel';
import webpack from 'webpack';

const vendor = 'vendor';

config.entry[vendor] = [
  'jquery',
  'bootstrap/dist/js/bootstrap.js',
  'bootstrap/dist/css/bootstrap.css',
  'angular/angular-csp.css',
  'angular',
  'angular-ui-router',
];

config.devtool = '#source-map';

config.plugins = [
  ...config.plugins,
  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */ vendor, /* filename= */ `${vendor}.js`),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
];

export default config;
