import path from 'path';
import webpack from 'webpack';
import ExtractPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;
const resolve = (rel) => path.resolve(process.cwd(), rel);
const appStaticFiles = resolve('./src/assets');
const include = resolve('./src');
export default {
  entry: {
    bookmarks: './src/main.js'
  },

  output: {
    path: './dist',
    filename: '[name].js',
  },

  module: {
    preLoaders: [{
      include,
      test: /\.js$/,
      loader: 'source-map',
    }],

    loaders: [
      {
        include,
        test: /src.*\.js$/,
        loader: 'ng-annotate!babel',
      },
      {
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
      {
        include,
        test: /template.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]',
      },
      {
        test: /\.css$/,
        include: [
          resolve('./node_modules/angular'),
          resolve('./node_modules/semantic-ui/dist'),
          include,
        ],
        loader: ExtractPlugin.extract('style', 'css?importloader=1', 'postcss'),
      },
      {
        include,
        test: /\.styl$/,
        loader: ExtractPlugin.extract('style', 'css!postcss!stylus?sourceMap'),
      },
      {
        include: exclude,
        loader: 'file?name=vendor/[1]&regExp=node_modules/(.*)',
        test: assets,
      },
      {
        include: appStaticFiles,
        loader: 'file?name=assets/[1]&regExp=src/assets/(.*)',
        test: assets,
      },
      {
        exclude: [exclude, appStaticFiles],
        loader: 'file?name=[path]/[name].[ext]',
        test: assets,
      },
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new ExtractPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      minify: {
        collapseWhitespace: true
      }
    }),
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
    tls: 'empty',
  }
};
