import angular from 'angular';
import BmConfig from './config';
import BmComponent from './component';
// root bm-app component:
export default angular
  .module('bmApp.component', [])
  .component('bmApp', BmComponent)
  .config(['$urlRouterProvider', '$locationProvider', '$stateProvider', BmConfig]);
