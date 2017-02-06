import angular from 'angular';

import Component from './app.component';
import Config from './app.component.config';

export default angular
  .module('app.components', [])
  .component('app', Component)
  .config(['$stateProvider', Config]);
