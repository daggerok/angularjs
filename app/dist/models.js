var AngularMaterialApp;
(function (AngularMaterialApp) {
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        ;
        return Note;
    }());
    AngularMaterialApp.Note = Note;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        ;
        return User;
    }());
    AngularMaterialApp.User = User;
})(AngularMaterialApp || (AngularMaterialApp = {}));
//# sourceMappingURL=/Users/mak/Documents/code/test/js/ng/angularjs/app/src/models.js.map