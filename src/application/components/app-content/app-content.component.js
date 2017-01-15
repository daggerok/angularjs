import './app-content.component.styl';
import template from './app-content.component.html';
import controller from './app-content.component.controller';

export default {
  template,
  controller,
  bindings: {
    bookmarks: '<',
  },
};
