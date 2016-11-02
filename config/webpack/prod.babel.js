import config from './common.babel';
import webpack from 'webpack';

const vendors = 'vendors';

config.devtool = '#source-map';

config.plugins = [
  ...config.plugins,

  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */ vendors, /* filename= */ `${vendors}.js`),

  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
];

export default config;
