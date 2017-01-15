import angular from 'angular';

import ToolbarModule from './app-toolbar';
import SidenavModule from './app-sidenav';
import ContentModule from './app-content';
import AppComponent from './app.component';
import AppRouteConfig from './app.component.route.config';

const app = angular.module('app.component', [
  ToolbarModule.name,
  SidenavModule.name,
  ContentModule.name,
]);

app.component('app', AppComponent);
app.config(['$stateProvider', AppRouteConfig]);

export default app;
