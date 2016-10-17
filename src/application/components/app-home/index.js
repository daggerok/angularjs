import './style.styl';

import angular from 'angular';

import Component from './component';
import BookmarksComponent from './app-bookmarks/component';
import BookmarkComponent from './app-bookmarks/app-bookmark/component';
import CategoryComponent from './app-bookmarks/app-category/component';
import EditBookmarkComponent from './app-bookmarks/app-edit-bookmark/component';

export default angular
  .module('appBookmarks.component', [])
  .component('appHome', Component)
  .component('appBookmarks', BookmarksComponent)
  .component('appBookmark', BookmarkComponent)
  .component('appCategory', CategoryComponent)
  .component('appEditBookmark', EditBookmarkComponent);
