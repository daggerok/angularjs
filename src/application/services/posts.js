export default class PostService {
  constructor($http, HateoasService) {
    'ngInject';
    this.$http = $http;
    this.HateoasService = HateoasService;
    this.api = './api/posts';
  }

  getPosts() {
    return this.$http.get(this.api).then(
      ok => this.HateoasService.posts(ok),
      err => console.error
    );
  }
}
