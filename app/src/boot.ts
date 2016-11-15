module AngularMaterialApp {
  angular.module('angularjs-material-app', ['ngMaterial'])
    .service('userService', UserService)
    .controller('mainController', MainController);
}
