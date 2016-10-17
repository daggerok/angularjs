import angular from 'angular';
import Component from './component';
import BookmarkComponent from './app-bookmark/component';
import CategoryComponent from './app-category/component';
import EditBookmarkComponent from './app-edit-bookmark/component';

export default angular
  .module('appBookmarks.component', [])
  .component('appBookmarks', Component)
  .component('appBookmark', BookmarkComponent)
  .component('appCategory', CategoryComponent)
  .component('appEditBookmark', EditBookmarkComponent);
