import angular from 'angular';
import HeaderBrandComponent from './header-brand/component';
import HeaderNavComponent from './header-nav/component';
import AppHeaderComponent from './component';

export default angular
  .module('app.components.header', [])
  .component('app.header', AppHeaderComponent)
  .component('header.brand', HeaderBrandComponent)
  .component('header.nav', HeaderNavComponent);

