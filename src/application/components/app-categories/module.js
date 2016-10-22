import angular from 'angular';
import AppCategoriesComponent from './component';
import AppPostComponent from './app-post/component';
import AppCategoryComponent from './app-category/component';

export default angular
  .module('app.components.categories', [])
  .component('app.categories', AppCategoriesComponent)
  .component('app.category', AppCategoryComponent)
  .component('app.post', AppPostComponent);
