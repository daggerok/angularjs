import ExtractPlugin from 'extract-text-webpack-plugin';
import resolve from './webpack/resolve.config.babel';
import plugins from './webpack/plugins.config.babel';
import module from './webpack/module.config.babel';
import postcss from './webpack/postcss.config.babel';
import eslint from './webpack/eslint.config.babel';
import node from './webpack/node.config.babel';
import devServer from './webpack/webpacl-dev-server.babel';
import project, { isGhpages, isProdOrGhpages } from './webpack/project.config.babel';

const suffix = `v=${project.version}`;
const extractCSS = new ExtractPlugin(`[name].css?${suffix}`, { allChunks: true });

export const vendors = 'vendors';
export const publicPath = isGhpages ? '/angularjs/' : '/';

export default {
  entry: {
    vendors: './src/vendors.js',
    app: './src/main.js',
  },

  output: {
    path: './dist',
    filename: `[name].js?${suffix}`,
    chunkFilename: `[id].chunk.js?v${suffix}`,
    sourceMapFilename: isProdOrGhpages ? false : `[file].map?${suffix}`,
    jsonpFunction: 'w',
    publicPath,
  },

  module: module(extractCSS),
  plugins: plugins(extractCSS, vendors, suffix, publicPath),
  profile: 'web',
  devServer: isProdOrGhpages ? false : devServer(publicPath),
  devtool: isProdOrGhpages ? false : '#source-map',
  resolve,
  postcss,
  eslint,
  node,
};
