import angular from 'angular';
import BmCategoriesComponent from './component';
import BmCategoryComponent from './bm-category/component';

export default angular
  .module('bm.categories.component', [])
  .component('bmCategory', BmCategoryComponent)
  .component('bmCategories', BmCategoriesComponent);
