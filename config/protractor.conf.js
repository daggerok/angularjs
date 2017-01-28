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
};
