export default class AppUsersController {
  constructor($log, UserService) {
    'ngInject';

    this.$ctrl = this;
    this.$log = $log;
    this.UserService = UserService;
    this.users = [];
    this.current = {};
  }

  $onInit() {
    this.getUsers();
  }

  getUsers() {
    this.UserService.getUsers().then(
      users => this.users = users,
      err => this.$log.error
    );
  }

  updateUser(updatedUser) {
    this.users.map(user => {
      if (user.id === updatedUser.id) {
        user = updatedUser;
      }
    });
    return false;
  }
}
