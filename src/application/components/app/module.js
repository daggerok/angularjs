import angular from 'angular';
import AppConfig from './config';
import AppComponent from './component';
// root application component:
export default angular
  .module('app.component', [])
  .component('app', AppComponent)
  .config(['$urlRouterProvider', '$locationProvider', '$stateProvider', AppConfig]);
