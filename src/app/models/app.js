export default class BookmarkModel {
  constructor($http, $log, AppService) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.AppService = AppService;
  }

  test() {
    return this.$log.info(this.AppService.test());
  }

  static uri() {
    return '/api/app';
  }
}
