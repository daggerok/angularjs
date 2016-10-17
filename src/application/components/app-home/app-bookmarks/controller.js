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

  setEditingBookmark(bookmark) {
    this.editingBookmark = Object.assign({}, bookmark);
  }

  isEditingBookmark(bookmark) {
    return this.editingBookmark
      && this.editingBookmark.id
      && this.editingBookmark.id === bookmark.id
  }

  onUpdate($event) {
    this.all
        .filter(b => b.id === $event.id)
        .map(b => b.name = $event.name);
    this.editingBookmark = null;
  }

  onCancel($event) {
    this.all
        .filter(b => b.id === $event.id)
        .map(b => b.name = this.editingBookmark.name);
    this.editingBookmark = null;
  }
}
