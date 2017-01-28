import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components';
import ServicesModule from './services';
import ModelsModule from './models';

const app = angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  ServicesModule.name,
  ModelsModule.name,
]);

const Config = ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  // $locationProvider.hashPrefix('!');
  // $locationProvider.html5Mode(true);
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
};

app.config(['$urlRouterProvider', '$locationProvider', Config]);

export default app;
