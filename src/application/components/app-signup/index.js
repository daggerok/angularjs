import angular from 'angular';
import Config from './config';
import Component from './component';

export default angular
  .module('appSignup.component', [])
  .component('appSignup', Component)
  .config(['$stateProvider', Config]);
