import angular from 'angular';

import ContentItemModule from './app-content-item';
import ContentComponent from './app-content.component';
import ContentRouteComponent from './app-content.component.route';

export default angular
  .module('app-content.component', [ContentItemModule.name])
  .component('appContent', ContentComponent)
  .config(['$stateProvider', ContentRouteComponent]);
