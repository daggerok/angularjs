export default class HateoasService {
  constructor() {
    'ngInject';
    this.embed = (resp) => resp.data._embedded || {};
  }

  bookmarks(resp) {
    return this.embed(resp).bookmarks || [];
  }

  categories(resp) {
    return this.embed(resp).categories || [];
  }
}
