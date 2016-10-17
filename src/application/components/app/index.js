import angular from 'angular';
import Component from './component';
import HeaderComponent from './header/component';

export default angular
  .module('app.component', [])
  .component('app', Component)
  .component('appHeader', HeaderComponent)
