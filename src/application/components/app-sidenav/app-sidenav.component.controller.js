export default class SidenavController {
  constructor(BookmarkModel) {
    'ngInject';
    this.$ctrl = this;
    this.BookmarkModel = BookmarkModel;
    this.bookmarks = [];
  }

  $onInit() {
    this.BookmarkModel.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks || []);
  }
}
