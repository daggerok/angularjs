import angular from 'angular';

import Config from './app.component.config';
import Component from './app.component';
import ToolbarModule from './app-toolbar';
import SidenavModule from './app-sidenav';
import HomeModule from './app-home';

// root component:
const app = angular.module('app.component', [
  ToolbarModule.name,
  SidenavModule.name,
  HomeModule.name,
]);

app.component('app', Component);
app.config(['$stateProvider', Config]);

export default app;
