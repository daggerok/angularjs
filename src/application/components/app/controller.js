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
      // // we don't need this root '/' route, it will apply automatically
      //{ path: '/...'       , name: 'App'      , component: 'app'         , abstract: true    },
      { path: '/home'      , name: 'Home'     , component: 'appHome'     , useAsDefault: true, },
      { path: '/contact-us', name: 'ContactUs', component: 'appContactUs',                     },
      { path: '/site-map'  , name: 'SiteMap'  , component: 'appSiteMap'  ,                     },
      { path: '/login'     , name: 'Login'    , component: 'appLogin'    ,                     },
      { path: '/signup'    , name: 'SignUp'   , component: 'appSignup'   ,                     },
    ]);
  }
}
