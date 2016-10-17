import angular from 'angular';
import '@angular/router/angular1/angular_1_router.js';

import ComponentsModule from './components';
import ModelsModule from './models';
import ServicesModule from './services';

export default angular.module('app', [
  'ngComponentRouter',
  ComponentsModule.name,
  ModelsModule.name,
  ServicesModule.name,
]);
