import angular from 'angular';
import Config from './config';
import Component from './component';
import AppBookmarksModule from './app-bookmarks';

export default angular
  .module('appHome.component', [AppBookmarksModule.name])
  .component('appHome', Component)
  .config(['$stateProvider', Config]);
