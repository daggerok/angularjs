import angular from 'angular';
import Config from './config';
import Component from './component';

export default angular
  .module('appLogin.component', [])
  .component('appLogin', Component)
  .config(['$stateProvider', Config]);
