import angular from 'angular';

import application from './app';

export default angular.bootstrap(document, [ application.name ], {
  strictDi: true, // instead of data-ng-strict-di=""
  cloak: true, // instead of data-ng-cloak=""
});
