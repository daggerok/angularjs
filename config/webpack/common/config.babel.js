import webpack from 'webpack';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractPlugin from 'extract-text-webpack-plugin';
import htmlWebpackPluginConfig from './html.config.babel';

import module from './config.module.babel';

const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });

export const vendors = 'vendors';

export default {
  entry: {
    vendors: './src/vendors.js',
    app: './src/main.js',
  },

  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/',
  },

  module: module(extractCSS),

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    extractCSS,

    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin(htmlWebpackPluginConfig),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],

  postcss: [
    autoprefixer,
    cssnano
  ],

  node:{
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
