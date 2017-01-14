import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import ModelsModule from './models';
import ServicesModule from './services';
import ComponentsModule from './components';
import Config from './infrastructure/application.config';

const application = angular.module('app', [
  uiRouter,
  ngMaterial,
  ModelsModule.name,
  ServicesModule.name,
  ComponentsModule.name,
]);

application.config([
  '$urlRouterProvider',
  '$locationProvider',
  Config
]);

export default application;
