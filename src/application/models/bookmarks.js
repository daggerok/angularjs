export default class BookmarkModel {
  constructor($http, $log, HateoasService) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.HateoasService = HateoasService;
  }

  getBookmarks() {
    return this.$http.get(BookmarkModel.uri()).then(
      ok => this.HateoasService.bookmarks(ok),
      this.$log.error
    );
  }

  distinct(categories, byName) {
    const result = [];
    categories.forEach(category => {
      const isNew = result.filter(
          curr => curr[byName] === category[byName])
          .length === 0;
      if (isNew) {
        result.push(category);
      }
    });
    return result;
  }

  static uri() {
    return './api/bookmarks';
  }
}
