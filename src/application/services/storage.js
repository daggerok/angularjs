export default class StorageService {
  constructor(BookmarkModel) {
    'ngInject';
    this.BookmarkModel = BookmarkModel;
    this.bookmarks = [];
    this.selectedBookmark;
  }

  setBookmarks(boomarks) {
    this.bookmarks = boomarks;
  }

  getBookmarks() {
    return this.bookmarks;
  }

  findBookmarksById(id) {
    return this.bookmarks.filter(b => b.id == id);
  }

  setSelectedBookmark(selectedBookmark) {
    this.selectedBookmark = selectedBookmark;
  }

  getSelectedBookmark() {
    return this.selectedBookmark;
  }
}
