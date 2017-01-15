import ExtractPlugin from 'extract-text-webpack-plugin';
import resolve from './resolve.config.babel';
import plugins from './plugins.config.babel';
import module from './module.config.babel';
import postcss from './postcss.config.babel';
import eslint from './eslint.config.babel';
import node from './node.config.babel';
import project from './project.config.babel';

const extractCSS = new ExtractPlugin(`[name].css?v=${project.version}`, { allChunks: true });

export const vendors = 'vendors';
export const publicPath = '/';
export default {
  entry: {
    vendors: './src/vendors.js',
    app: './src/main.js',
  },

  output: {
    path: './dist',
    filename: `[name].js?v=${project.version}`,
    chunkFilename: `[id].chunk.js?v=${project.version}`,
    jsonpFunction: 'w',
    publicPath,
  },

  module: module(extractCSS),
  plugins: plugins(extractCSS, vendors),
  profile: 'web',
  resolve,
  postcss,
  eslint,
  node,
};
