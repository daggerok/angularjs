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
    // requireBase: false
  });
};

// karma require base
if (process && process.env && process.env.DEVELOPMENT) {
  // <base href="/">
  const heads = document.getElementsByTagName('head');
  const base = document.createElement('base');

  base.setAttribute('href', '/');
  angular
    .element(heads)
    .append(base);
}

app.config(['$urlRouterProvider', '$locationProvider', Config]);

export default app;
