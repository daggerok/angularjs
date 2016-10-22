import angular from 'angular';
import uiRouter from 'angular-ui-router';
import BmAppModule from './bm-app';
import BmHeaderModule from './bm-header';
import BmFooterModule from './bm-footer';
import BmHomeModule from './bm-home';

export default angular.module('bm.components', [
  uiRouter,
  BmAppModule.name,
  BmHeaderModule.name,
  BmFooterModule.name,
  BmHomeModule.name,
]);
