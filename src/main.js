import angular from 'angular';

import app from './app';

export default angular.bootstrap(document, [ app.name ], {
  strictDi: true, // instead of data-ng-strict-di=""
  cloak: true, // instead of data-ng-cloak=""
});
