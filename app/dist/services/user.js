var AngularMaterialApp;
(function (AngularMaterialApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'test-name 1',
                    avatar: 'test-avatar-1',
                    bio: 'test-bio 1',
                    notes: [
                        {
                            title: 'test 1',
                            date: new Date('2016-11-11'),
                        },
                        {
                            title: 'test 2',
                            date: new Date('2016-12-12'),
                        }
                    ]
                },
                {
                    name: 'test-name 2',
                    avatar: 'test-avatar-2',
                    bio: 'test-bio 2',
                    notes: [
                        {
                            title: 'test 1',
                            date: new Date('2016-11-11'),
                        },
                        {
                            title: 'test 2',
                            date: new Date('2016-12-12'),
                        }
                    ]
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        return UserService;
    }());
    UserService.$inject = ['$q'];
    AngularMaterialApp.UserService = UserService;
})(AngularMaterialApp || (AngularMaterialApp = {}));
//# sourceMappingURL=/Users/mak/Documents/code/test/js/ng/angularjs/app/src/services/user.js.map