import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });

const resolve = (rel) => path.resolve(process.cwd(), rel);

const include = resolve('./src');
const resources = resolve('./src/resources');

const vendors = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;

export default {
  entry: {
    vendors: './src/vendors.js',
    'angularjs-redux': './src/main.js'
  },

  output: {
    path: './dist',
    filename: '[name].js',
    // https://daggerok.github.io/angularjs/
    publicPath: '/angularjs/'
  },

  module: {
    preLoaders: [{
      // source maps
      exclude: vendors,
      include,
      test: /\.js$/,
      loader: 'source-map',
    }],

    loaders: [
      // angular dependency injection using ng-annotate
      {
        exclude: vendors,
        include,
        test: /src.*\.js$/,
        loader: 'ng-annotate!babel',
      },
      // es next
      {
        exclude: vendors,
        include,
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            'stage-0',
            'es2015',
          ],
          plugins: [
            'add-module-exports',
            'transform-class-properties',
          ]
        }
      },
      // import template from './template.html';
      {
        test: /template.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]',
      },
      // processing css styles
      {
        test: /\.css$/,
        include: [
          resolve('./node_modules/angular'),
          resolve('./node_modules/bootstrap/dist'),
          include,
        ],
        loader: extractCSS.extract('style', 'css?importloader=1&sourceMap', 'postcss'),
      },
      // processing styl styles
      {
        include,
        test: /\.styl$/,
        loader: extractCSS.extract('style', 'css!postcss!stylus?sourceMap'),
      },
      // any from mode_modules
      {
        include: vendors,
        loader: 'file?name=vendors/[1]&regExp=node_modules/(.*)',
        test: assets,
      },
      // src/resources folder
      {
        include: resources,
        loader: 'file?name=resources/[1]&regExp=src/resources/(.*)',
        test: assets,
      },
      // all other paths
      {
        exclude: [vendors, resources],
        loader: 'file?name=[path]/[name].[ext]',
        test: assets,
      },
      /*
      {
        include, // bootstrap
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        include, // bootstrap
        test: /\.(woff|woff2)$/,
        loader:`${urlLimit}&prefix=font/`,
      },
      {
        include, // bootstrap
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${urlLimit}&mimetype=app/octet-stream`,
      },
      {
        include, // bootstrap
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${urlLimit}&mimetype=image/svg+xml`,
      },
      */
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    extractCSS,

    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      minify: { collapseWhitespace: true },
    }),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
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
