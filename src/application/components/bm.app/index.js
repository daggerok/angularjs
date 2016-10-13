import angular from 'angular';
import BmConfig from './config';
import BmComponent from './component';
// root bm.app component:
export default angular
  .module('bm.app.component', [])
  .component('bm.app', BmComponent)
  .config(['$urlRouterProvider', '$locationProvider', '$stateProvider', BmConfig]);
