import angular from 'angular';

import Component from './app.component';
import Config from './app.component.config';

// root component:
const app = angular.module('app.components', []);

app.component('app', Component);
app.config(['$stateProvider', Config]);

export default app;
