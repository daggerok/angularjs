module.exports = env => ({
  chunksSortMode: 'none',
  filename: 'index.html',
  favicon: './src/favicon.ico',
  template: './src/index.html',
  minify: env !== 'development' ? {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  } : false,
});
