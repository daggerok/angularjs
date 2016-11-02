import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AraAppModule from './ara-app';

export default angular.module('ara.components', [
  uiRouter,
  AraAppModule.name,
]);
