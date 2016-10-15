import angular from 'angular';
import AppFollowingMenuComponent from './app-following-menu/component';
import HeaderComponent from '../common/app-header/component';
import FooterComponent from '../common/app-footer/component';
import LinksComponent from './app-links/component';

export default angular
  .module('app.component.common', [])
  .component('appFollowingMenu', AppFollowingMenuComponent)
  .component('appHeader', HeaderComponent)
  .component('appFooter', FooterComponent)
  .component('appLinks', LinksComponent);
