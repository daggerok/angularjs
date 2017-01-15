import angular from 'angular';

import SidenavItemModule from './app-sidenav-item';
import SidenavComponent from './app-sidenav.component';

export default angular
  .module('app-sidenav.component', [SidenavItemModule.name])
  .component('appSidenav', SidenavComponent);
