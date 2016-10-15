import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppModule from './app';
import AppContactUsModules from './app-contact-us';
import AppHomeModule from './app-home';
import AppLoginModules from './app-login';
import AppSignupModules from './app-signup';
import AppSiteMapModules from './app-site-map';
import CommonModule from './common';

export default angular.module('app.components', [
  uiRouter,
  AppModule.name,
  AppContactUsModules.name,
  AppHomeModule.name,
  AppLoginModules.name,
  AppSignupModules.name,
  AppSiteMapModules.name,
  CommonModule.name,
]);
