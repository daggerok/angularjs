import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppModule from './app/module';
import AppHeaderModule from './app-header/module';
import AppFooterModule from './app-footer/module';
import AppHomeModule from './app-home/module';
import AppUsersModule from './app-users/module';
import AppCategoriesModule from './app-categories/module';
import AppLifecycleModule from './app-lifecycle/module';

export default angular.module('app.components', [
  uiRouter,
  AppModule.name,
  AppHeaderModule.name,
  AppHomeModule.name,
  AppFooterModule.name,
  AppUsersModule.name,
  AppCategoriesModule.name,
  AppLifecycleModule.name,
]);
