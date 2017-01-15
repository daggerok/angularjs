import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import ModelsModule from './models';
import ServicesModule from './services';
import ComponentsModule from './components';
import RouteConfig from './application.route.config';

export default angular.module('app', [
  uiRouter,
  ngMaterial,
  ModelsModule.name,
  ServicesModule.name,
  ComponentsModule.name,
]).config([
  '$urlRouterProvider',
  '$locationProvider',
  RouteConfig,
]);
