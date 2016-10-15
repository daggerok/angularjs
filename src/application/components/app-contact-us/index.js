import angular from 'angular';
import Component from './component';
import Config from './config';

export default angular
  .module('appContactUs.component', [])
  .component('appContactUs', Component)
  .config(['$stateProvider', Config]);
