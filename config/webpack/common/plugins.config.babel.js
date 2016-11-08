import {
  NoErrorsPlugin,
  ProvidePlugin,
  optimize,
} from 'webpack';

export default (extractCSS, vendors) => [
  extractCSS,
  new NoErrorsPlugin(),
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
  }),
  new optimize.CommonsChunkPlugin(
    /* chunkName= */ vendors,
    /* filename= */ `${vendors}.js`
  ),
];
