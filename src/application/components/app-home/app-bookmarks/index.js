import angular from 'angular';
import Component from './component';
import BookmarkComponent from './app-bookmark/component';
import CategoryComponent from './app-category/component';

export default angular
  .module('appBookmarks.component', [])
  .component('appBookmarks', Component)
  .component('appBookmark', BookmarkComponent)
  .component('appCategory', CategoryComponent);
