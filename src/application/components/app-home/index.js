import angular from 'angular';

import Config from './app-home.component.config';
import Component from './app-home.component';

export default angular
  .module('app-home.component', [])
  .component('appHome', Component)
  .config(['$stateProvider', Config]);
