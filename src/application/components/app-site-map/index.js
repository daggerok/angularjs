import angular from 'angular';
import Component from './component';
import Config from './config';

export default angular
  .module('appSiteMap.component', [])
  .component('appSiteMap', Component)
  .config(['$stateProvider', Config]);
