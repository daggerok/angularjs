import angular from 'angular';
import BookmarkModel from './bookmarks';
import CategoryModel from './categories';

export default angular
  .module('angularjs-redux.models', [])
  .service('BookmarkModel', BookmarkModel)
  .service('CategoryModel', CategoryModel);
