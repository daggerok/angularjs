import path from 'path';
import webpack from 'webpack';
import ExtractPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const resolve = (rel) => path.resolve(process.cwd(), rel);
const include = resolve('./node_modules/bootstrap/dist');
const src = resolve('./src');
const exclude = /(node_modules|bower_components)/;
const urlLimit = 'url?limit=1024';
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
      exclude,
      include: src,
      test: /\.js$/,
      loader: 'source-map',
    }],

    loaders: [
      {
        exclude,
        include: src,
        test: /src.*\.js$/,
        loader: 'ng-annotate!babel',
      },
      {
        exclude,
        include: src,
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
        test: /template.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]',
      },
      {
        test: /\.css$/,
        include: [resolve('./node_modules/angular'), include, src],
        loader: ExtractPlugin.extract('style', 'css?importloader=1', 'postcss'),
      },
      {
        include: src,
        test: /\.styl$/,
        loader: ExtractPlugin.extract('style', 'css!postcss!stylus?sourceMap'),
      },
      /*
      {
        include,
        loader: 'url',
        // loader: urlLimit,
        test: /\.(eot|otf|woff(2)?|ttf|svg)?$/,
      },
      */
      {
        include,
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        include,
        test: /\.(woff|woff2)$/,
        loader:`${urlLimit}&prefix=font/`,
      },
      {
        include,
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${urlLimit}&mimetype=app/octet-stream`,
      },
      {
        include,
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${urlLimit}&mimetype=image/svg+xml`,
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
      favicon: './src/favicon.ico'
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
    tls: 'empty'
  }
};
