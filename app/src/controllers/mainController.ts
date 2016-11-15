module AngularMaterialApp {
  export class MainController {
    static $inject = ['userService'];
    constructor(private userService: UserService) {
      const $ctrl = this;

      const some = this.userService.loadAllUsers();
      console.log(some);
      this.userService
        .loadAllUsers()
        .then((users: User[]) => {
          $ctrl.users = users;
          console.log(users);
        });
    }
    private users: User[] = [];
    message: string = 'hi!';
  }
}
