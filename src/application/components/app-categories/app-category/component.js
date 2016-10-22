import template from './template.html';

export default {
  /* // angular before 1.5
  scope: {
    category: '='
  },
  */
  // angular 1.5+
  bindings: {
    category: '<',
    categoryOutput: '&'
  },
  template,
};
