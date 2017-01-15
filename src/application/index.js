import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import Config from './config';
import ModelsModule from './models';
import ServicesModule from './services';
import ComponentsModule from './components';

const application = angular.module('app', [
  uiRouter,
  ngMaterial,
  ModelsModule.name,
  ServicesModule.name,
  ComponentsModule.name,
]).config([
  '$urlRouterProvider',
  '$locationProvider',
  Config,
]);

export default application;
