/**
 * ## Use
 * The directive uses a simple syntax: `ng-link="componentName({ param: paramValue })"`
 *
 * ### Example
 *
 * ```js
 * angular.module('myApp', ['ngComponentRouter'])
 *   .controller('AppController', ['$rootRouter', function($rootRouter) {
 *     $rootRouter.config({ path: '/user/:id', component: 'user' });
 *     this.user = { name: 'Brian', id: 123 };
 *   });
 * ```
 *
 * ```html
 * <div ng-controller="AppController as app">
 *   <a ng-link="user({id: app.user.id})">{{app.user.name}}</a>
 * </div>
 * ```
 */

export default class Controller {
  constructor($rootRouter) {
    'ngInject';
    this.$rootRouter = $rootRouter;
  }

  $onInit() {
    this.$rootRouter.config([
      { path: '/...', name: 'App', component: 'app', useAsDefault: true, },
    ]);
  }
}
