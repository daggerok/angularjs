import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Config from './config';
import ComponentsModule from './components';
import ModelsModule from './models';
import ServicesModule from './services';

const Application = angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  ModelsModule.name,
  ServicesModule.name,
]);

Application.config(['$locationProvider', '$urlRouterProvider', Config]);

export default Application;
