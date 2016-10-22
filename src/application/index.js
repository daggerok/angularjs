import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppServicesModule from './services';
import AppComponentsModule from './components';

export default angular.module('app', [
  uiRouter,
  AppServicesModule.name,
  AppComponentsModule.name,
]);
