import angular from 'angular';

import ContentComponent from './app-content.component';
import ContentRouteComponent from './app-content.component.route';

export default angular
  .module('app-content.component', [])
  .component('appContent', ContentComponent)
  .config(['$stateProvider', ContentRouteComponent]);
