import { isProdOrGhpages } from './project.config.babel';

export default {
  emitError: isProdOrGhpages,
  failOnError: isProdOrGhpages,

  emitWarning: isProdOrGhpages,
  failOnWarning: isProdOrGhpages,

  configFile: './config/.eslintrc.js',
  // several examples !

    // community formatter
  formatter: require('eslint-friendly-formatter'),

  // // default value
  // formatter: require('eslint/lib/formatters/stylish'),
  //
  // // custom formatter
  // formatter: function(results) {
  //   // `results` format is available here
  //   // http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()
  //
  //   // you should return a string
  //   // DO NOT USE console.*() directly !
  //   return 'OUTPUT';
  // },

  outputReport: {
    filePath: './dist/checkstyle.xml',
    formatter: require('eslint/lib/formatters/checkstyle')
  }
};
