import template from './template.html';

export default {
  template,
  bindings: {
    bookmark: '<',
    onUpdate: '&',
    onCancel: '&',
  }
};