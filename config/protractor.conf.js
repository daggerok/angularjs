const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const reportsPath = './dist/reports';

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
    // Remove protractor dot reporter
    print: () => {},
  },
  onPrepare: () => {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: `${reportsPath}/protractor-jasmine2-html-reporter/screenshots`,
      })
    );
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
};
