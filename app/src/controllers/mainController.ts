module AngularMaterialApp {
  export class MainController {
    static $inject = ['userService'];
    constructor(private userService: UserService) {
      const $ctrl = this;
      this.userService
        .loadAllUsers()
        .then((users: User[]) => {
          $ctrl.users = users;
          console.log(JSON.stringify(users, null, 2));
        });
    }
    private users: User[] = [];
    message: string = 'hi!';
  }
}
