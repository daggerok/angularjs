import angular from 'angular';
import Config from './config';

import Component from './component';

export default angular
  .module('angularjs-redux.home.component', [])
  .component('araHome', Component)
  .config(['$stateProvider', Config]);
