var AngularMaterialApp;
(function (AngularMaterialApp) {
    angular.module('angularjs-material-app', ['ngMaterial'])
        .service('userService', AngularMaterialApp.UserService)
        .controller('mainController', AngularMaterialApp.MainController);
})(AngularMaterialApp || (AngularMaterialApp = {}));
//# sourceMappingURL=/Users/mak/Documents/code/test/js/ng/angularjs/app/src/boot.js.map