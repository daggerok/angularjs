const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} = require('webpack');

const {
  AggressiveMergingPlugin,
  // CommonsChunkPlugin,
  UglifyJsPlugin,
} = optimize;

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
// const CopyWebpackPlugin = require('./plugins/copy-webpack-plugin');
const uglifyJsPluginConfig = require('./plugins/uglify-js-plugin.config');
const compressionWebpackPluginConfig = require('./plugins/compression-webpack-plugin.config');
const scriptExtHtmlWebpackPluginConfig = require('./plugins/script-ext-html-webpack-plugin.config');
const extractTextWebpackPluginConfig = require('./plugins/extract-text-webpack-plugin.config');
const providePluginConfig = require('./plugins/provide-plugin.config');
const definePluginConfig = require('./plugins/define-plugin.config');
const htmlWebpackPluginConfig = require('./plugins/html-webpack-plugin.config');
const baseHrefWebpackPluginConfig = require('./plugins/base-href-webpack-plugin.config');
const loaderOptionsPluginConfig = require('./plugins/loader-options-plugin.config');

module.exports = env => [
  // CopyWebpackPlugin,
  new ProvidePlugin(providePluginConfig),
  new DefinePlugin(definePluginConfig(env)),
  new HtmlWebpackPlugin(htmlWebpackPluginConfig(env)),
  new LoaderOptionsPlugin(loaderOptionsPluginConfig(env)),
  new BaseHrefWebpackPlugin(baseHrefWebpackPluginConfig(env)),
  new ExtractTextWebpackPlugin(extractTextWebpackPluginConfig(env)),
  env === 'development' ? new NoEmitOnErrorsPlugin() : undefined,
  env !== 'development' ? new AggressiveMergingPlugin() : undefined,
  env !== 'development' ? new UglifyJsPlugin(uglifyJsPluginConfig) : undefined,
  env !== 'development' ? new CompressionWebpackPlugin(compressionWebpackPluginConfig) : undefined,
  env !== 'development' ? new ScriptExtHtmlWebpackPlugin(scriptExtHtmlWebpackPluginConfig) : undefined,
].filter(plugin => !!plugin);
