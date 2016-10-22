import angular from 'angular';
import AppUsersComponent from './component';
import AppUserComponent from './app-user/component';

export default angular
  .module('app.components.users', [])
  .component('app.users', AppUsersComponent)
  .component('app.user', AppUserComponent);
