export default class CategoriesService {
  constructor($http, HateoasService) {
    'ngInject';
    this.$http = $http;
    this.HateoasService = HateoasService;
    this.api = './api/categories';
  }

  getCategories() {
    return this.$http.get(this.api).then(
      ok => this.HateoasService.categories(ok),
      err => console.error
    );
  }
}
