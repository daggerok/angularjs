import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ComponentsModule from './components';
import ModelsModule from './models';
import ServicesModule from './services';
import DefaultRoute from './route';

const Application = angular.module('angularjs-redux', [
  uiRouter,
  ComponentsModule.name,
  ModelsModule.name,
  ServicesModule.name,
]);

Application.config(['$locationProvider', '$urlRouterProvider', DefaultRoute]);

// <base href="/">
angular.element(document.getElementsByTagName('head'))
  .append(angular.element(`<base href="/angularjs/"/>`));
  // .append(angular.element(`<base href="${window.location.pathname}"/>`));

export default Application;
