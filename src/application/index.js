import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ModelsModule from './models';
import ServicesModule from './services';
import ComponentsModule from './components';

const application = angular.module('app', [
  uiRouter,
  ModelsModule.name,
  ServicesModule.name,
  ComponentsModule.name,
]);

import './config/base.href';
import Config from './config/application';

application.config([
  '$urlRouterProvider',
  '$locationProvider',
  Config
]);

export default application;
