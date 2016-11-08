import ExtractPlugin from 'extract-text-webpack-plugin';
import resolve from './resolve.config.babel';
import plugins from './plugins.config.babel';
import postcss from './postcss.config.babel';
import module from './module.config.babel';
import node from './node.config.babel';

const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });

export const vendors = 'vendors';
export const publicPath = '/';
export default {
  entry: {
    vendors: './src/vendors.js',
    app: './src/main.js',
  },

  output: {
    path: './dist',
    filename: '[name].js',
    publicPath,
  },

  module: module(extractCSS),
  plugins: plugins(extractCSS, vendors),
  resolve,
  postcss,
  node
};
