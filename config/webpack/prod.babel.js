import config from './common.babel';
import webpack from 'webpack';

const vendor = 'vendor';

config.entry[vendor] = [
  'jquery',
  // 'semantic-ui/dist/semantic.js',
  // 'semantic-ui/dist/semantic.css',
  'semantic-ui/dist/components/visibility.js',
  'semantic-ui/dist/components/sidebar.js',
  'semantic-ui/dist/components/transition.js',
  'semantic-ui/dist/components/reset.css',
  'semantic-ui/dist/components/site.css',
  'semantic-ui/dist/components/container.css',
  'semantic-ui/dist/components/grid.css',
  'semantic-ui/dist/components/header.css',
  'semantic-ui/dist/components/image.css',
  'semantic-ui/dist/components/menu.css',
  'semantic-ui/dist/components/divider.css',
  'semantic-ui/dist/components/dropdown.css',
  'semantic-ui/dist/components/segment.css',
  'semantic-ui/dist/components/button.css',
  'semantic-ui/dist/components/list.css',
  'semantic-ui/dist/components/icon.css',
  'semantic-ui/dist/components/sidebar.css',
  'semantic-ui/dist/components/transition.css',
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
