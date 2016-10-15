import angular from 'angular';
import Config from './config';
import Component from './component';

export default angular
  .module('app.component', [])
  .component('app', Component)
  .config(['$urlRouterProvider', '$locationProvider', '$stateProvider', Config]);
