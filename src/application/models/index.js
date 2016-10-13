import angular from 'angular';
import BookmarkModel from './bookmarks';
import CategoryModel from './categories';

export default angular
  .module('bm.models', [])
  .service(BookmarkModel.name, BookmarkModel)
  .service(CategoryModel.name, CategoryModel);
