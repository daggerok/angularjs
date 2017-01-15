import path from 'path';

import { isProdOrGhpages } from './project.config.babel';

const resolve = (rel) => path.resolve(process.cwd(), rel);

const resources = resolve('./src/resources');
const include = resolve('./src');
const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;

export default (extractCSS) => ({

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
          'stage-0',
          'es2015',
        ],
        plugins: [
          'add-module-exports',
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
      include: resolve('./src/application'),
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
});
