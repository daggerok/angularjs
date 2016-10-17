import angular from 'angular';
import angularComponentRouterActive from 'angular-component-router-active';

import Config from './config';
import ComponentsModule from './components';
import ModelsModule from './models';
import ServicesModule from './services';

const App = angular.module('app', [
  'ngComponentRouter',
  angularComponentRouterActive,
  ComponentsModule.name,
  ModelsModule.name,
  ServicesModule.name,
]);

App.value('$rootRouterComponent', 'app');
App.config(['$locationProvider', Config]);

// <base href="/">
//angular.element(document.getElementsByTagName('head'))
//       .append(angular.element(`<base href="${window.location.pathname}"/>`));

export default App;
