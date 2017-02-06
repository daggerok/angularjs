module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: [
      'mocha',
      'chai',
    ],
    files: [
      './dist/*.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/chai/chai.js',
      './src/**/*.test.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-chrome-launcher',
    ],
  });
};
