const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  // we don't need do `webdriver-manager start`
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'jasmine',
  specs: [
    '../e2e/**/*.test.js',
  ],
  capabilities: {
    browserName: 'chrome',
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 5000,
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './dist/report/screenshots'
      })
    );
  }
};
