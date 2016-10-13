var AngularMaterialApp;
(function (AngularMaterialApp) {
    var MainController = (function () {
        function MainController(userService) {
            this.userService = userService;
            this.users = [];
            this.message = 'hi!';
            var $ctrl = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                $ctrl.users = users;
                // console.log(JSON.stringify(users, null, 2));
            });
        }
        return MainController;
    }());
    MainController.$inject = ['userService'];
    AngularMaterialApp.MainController = MainController;
})(AngularMaterialApp || (AngularMaterialApp = {}));
//# sourceMappingURL=/Users/mak/Documents/code/test/js/ng/angularjs/app/src/controllers/mainController.js.map