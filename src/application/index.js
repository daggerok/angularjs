import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components';
import ModelsModule from './models';
import ServicesModule from './services';

export default angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  ModelsModule.name,
  ServicesModule.name,
]);
