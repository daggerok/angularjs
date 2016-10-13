export default class BmCategoriesController {
  constructor(BookmarkModel) {
    'ngInject';
    this.$ctrl = this;
    this.BookmarkModel = BookmarkModel;
    this.bookmarks = [];
  }

  $onInit() {
    this.BookmarkModel.getBookmarks()
      .then(ok => this.bookmarks = ok);
  }
}
