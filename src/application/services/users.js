export default class UserService {
  constructor($http, HateoasService) {
    'ngInject';

    this.$http = $http;
    this.HateoasService = HateoasService;
    this.uri = './api/users';
  }

  getUsers() {
    return this.$http.get(this.uri).then(
      ok => this.HateoasService.users(ok),
      err => console.error
    );
  }
}
