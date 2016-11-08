import path from 'path';

const resolve = (rel) => path.resolve(process.cwd(), rel);

const resources = resolve('./src/resources');
const include = resolve('./src');
const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;

export default (extractCSS) => ({

  preLoaders: [
    {
      include,
      test: /\.js$/,
      loader: 'source-map',
    }
  ],

  loaders: [
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
        ]
      }
    },
    {
      include,
      test: /src.*\.js$/,
      loader: 'ng-annotate!babel',
    },
    {
      test: /\.html$/,
      loader: 'ng-cache?prefix=[dir]/[dir]',
      include: resolve('./src/application'),
    },
    {
      exclude: include,
      loader: 'raw',
      test: /\.html$/,
    },
    {
      include,
      loader: 'json',
      test: /\.json$/,
    },
    {
      test: /\.css$/,
      include: [
        resolve('./node_modules/bootstrap/dist'),
        resolve('./node_modules/angular'),
        resolve('./node_modules/angular-material'),
        include,
      ],
      loader: extractCSS.extract('style', 'css?importloader=1&sourceMap', 'postcss'),
    },
    {
      include,
      test: /\.styl$/,
      loader: extractCSS.extract('style', 'css!postcss!stylus?sourceMap'),
    },
    {
      include: exclude,
      loader: 'file?name=vendors/[1]&regExp=node_modules/(.*)',
      test: assets,
    },
    {
      include: resources,
      loader: 'file?name=resources/[1]&regExp=src/resources/(.*)',
      test: assets,
    },
    {
      exclude: [exclude, resources],
      loader: 'file?name=[path]/[name].[ext]',
      test: assets,
    },
  ]
});
