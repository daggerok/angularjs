export default class AppController {
  constructor(BookmarkModel) {
    'ngInject';
    this.$ctrl = this;
    this.BookmarkModel = BookmarkModel;
  }

  $onInit() {
    this.BookmarkModel.getBookmarks()
      .then(bs => this.bookmarks = (bs || []))
      .then(bs => bs.map(bookmark => bookmark.category))
      .then(cs => this.categories = this.BookmarkModel.distinct(cs, 'name'));
    /*
    this.CategoryModel.getCategories()
      .then(categories => this.categories = (categories || []));
      // .then(this.$log.info);
    */
  }
}
