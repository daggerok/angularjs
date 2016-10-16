import '../storage/Angular JS.png';
import '../storage/Semantic UI.png';
import '../storage/Webpack.png';

import './vendor';
import './assets';
import angular from 'angular';
import application from './application';

export default angular.bootstrap(document, [application.name], {
  strictDi: true, // instead of data-ng-strict-di=""
  cloak: true, // instead of data-ng-cloak=""
});
