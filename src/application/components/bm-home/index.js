import angular from 'angular';
import BmHomeComponent from './component';
import BmCategoriesModule from './bm-categories';
import BmBookmarksModule from './bm-bookmarks';

const BmHomeModule = angular.module('bmHome.component', [
  BmCategoriesModule.name,
  BmBookmarksModule.name,
]);

BmHomeModule .component('bmHome', BmHomeComponent);

export default BmHomeModule;
