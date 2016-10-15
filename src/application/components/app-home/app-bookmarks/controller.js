const copy = (obj) => Object.assign({}, obj);
const merge = (toBeMerged, withThisObject) =>
  toBeMerged = Object.assign({}, toBeMerged, withThisObject);

export default class BookmarksController {
  constructor($log, BookmarkModel, CategoryModel) {
    'ngInject';
    this.$log = $log;
    this.BookmarkModel = BookmarkModel;
    this.CategoryModel = CategoryModel;
    // set init state
    this.all = [];
    this.bookmarks = [];
    this.categories = [];
  }

  $onInit() {
    this.fetchCategories();
    this.fetchBookmarks();
  }

  fetchBookmarks() {
    this.BookmarkModel.getBookmarks()
        .then(bookmarks => this.bookmarks = this.all = bookmarks);
  }

  fetchCategories() {
    this.CategoryModel.getCategories()
        .then(categories => this.categories = categories);
  }

  filterBookmarksBy(category) {
    if (category && category.name) this.filterBookmarksByTitle(category.name);
  }

  filterBookmarksByTitle(title) {
    if (title) this.bookmarks = this.all.filter(bookmark => title === bookmark.title);
  }
}
