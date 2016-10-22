import angular from 'angular';
import BmBookmarksComponent from './component';
import BmBookmarkComponent from './bm-bookmark/component';

export default angular
  .module('bmBookmarks.component', [])
  .component('bmBookmark', BmBookmarkComponent)
  .component('bmBookmarks', BmBookmarksComponent);
