import path from 'path';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

import { suffix } from './output.config.babel';
import { isProdOrGhpages } from './project.config.babel';

const resolve = (rel) => path.resolve(process.cwd(), rel);

const resources = resolve('./src/resources');
const include = resolve('./src');
const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;

export const extractCSS = new ExtractTextWebpackPlugin(`[name].css?${suffix}`, { allChunks: true });

export default {

  preLoaders: [
    {
      exclude,
      test: /\.js$/,
      loader: 'eslint-loader',
    },
    isProdOrGhpages ? undefined : {
      include,
      test: /\.js$/,
      loader: 'source-map-loader',
    }
  ].filter(pl => !!pl),

  loaders: [
    {
      include,
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'stage-0',
        ],
        plugins: [
          'add-module-exports',
          'syntax-dynamic-import',
        ]
      }
    },
    {
      include,
      test: /src.*\.js$/,
      loader: 'ng-annotate-loader!babel-loader',
    },
    {
      test: /\.html$/,
      loader: 'ng-cache-loader?prefix=[dir]/[dir]',
      include: resolve('./src/app'),
    },
    {
      exclude: include,
      loader: 'raw-loader',
      test: /\.html$/,
    },
    {
      include,
      loader: 'json-loader',
      test: /\.json$/,
    },
    {
      test: /\.css$/,
      include: [
        resolve('./node_modules/semantic-ui-css'),
        resolve('./node_modules/bootswatch'),
        resolve('./node_modules/bootstrap/dist/css'),
        resolve('./node_modules/normalize.css'),
        resolve('./node_modules/angular'),
        resolve('./node_modules/angular-material'),
        include,
      ],
      loader: extractCSS.extract('style-loader', `css-loader?importloader=1${isProdOrGhpages ? '' : '&sourceMap'}`, 'postcss-loader'),
    },
    {
      include,
      test: /\.styl$/,
      loader: extractCSS.extract('style-loader', `css-loader!postcss-loader!stylus-loader${isProdOrGhpages ? '' : '?sourceMap'}`),
    },
    {
      include: exclude,
      loader: 'file-loader?name=vendors/[1]&regExp=node_modules/(.*)',
      test: assets,
    },
    {
      include: resources,
      loader: 'file-loader?name=resources/[1]&regExp=src/resources/(.*)',
      test: assets,
    },
    {
      exclude: [exclude, resources],
      loader: 'file-loader?name=[path]/[name].[ext]',
      test: assets,
    },
  ]
};
