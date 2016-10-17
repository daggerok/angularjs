import angular from 'angular';
import AppFollowingMenuComponent from './app-following-menu/component';
import HeaderComponent from './app-header/component';
import FooterComponent from './app-footer/component';
import LinksComponent from './app-links/component';
import AppSidebarMenuComponent from './app-sidebar-menu/component';

export default angular
  .module('app.component.common', [])
  .component('appFollowingMenu', AppFollowingMenuComponent)
  .component('appHeader', HeaderComponent)
  .component('appFooter', FooterComponent)
  .component('appLinks', LinksComponent)
  .component('appSidebarMenu', AppSidebarMenuComponent);
