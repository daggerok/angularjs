import angular from 'angular';
import BmHomeComponent from './component';
import BmCategoriesModule from './bm.categories';
import BmBookmarksModule from './bm.bookmarks';

export default angular.module('bm.home.component', [
  BmCategoriesModule.name,
  BmBookmarksModule.name,
]).component('bm.home', BmHomeComponent);
