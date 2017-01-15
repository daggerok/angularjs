export default class AppController {
  constructor($log, BookmarkModel) {
    'ngInject';
    this.$ctrl = this;
    this.$log = $log;
    this.BookmarkModel = BookmarkModel;
  }

  $onInit() {
    this.BookmarkModel.getBookmarks()
      .then(bookmarks => this.bookmarks = (bookmarks || []));
  }

  onSelect(payload) {
    this.current = payload;
  }
}
