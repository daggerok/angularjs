import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components';

const app = angular.module('app', [
  uiRouter,
  ComponentsModule.name,
]);

const Config = ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  //$locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
};

app.config(['$urlRouterProvider', '$locationProvider', Config]);

export default app;
