import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Config from './config';
import ComponentsModule from './components';
// import ServicesModule from './services';
// import ModelsModule from './models';

const app = angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  // ServicesModule.name,
  // ModelsModule.name,
]);

// karma require <base href="...">
if (process && process.env && process.env.DEVELOPMENT) {
  require('./base.href');
}

app.config(['$urlRouterProvider', '$locationProvider', Config]);

export default app;
