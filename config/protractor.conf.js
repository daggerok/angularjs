exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
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
