import faker from 'faker';

faker.locale = 'ru';

const rnd = (from = 5, to = 15) => {
  if (from < 0) rom = -from;
  if (to < 0) to =- to;
  if (from > to) return rnd(to, from);
  return Math.floor(Math.random() * to) + from;
};
const seq = () => Array(rnd()).fill();

const _links = [{self: 'http://localhost:8080/api'}];

const categories = seq().map((_, id) => { return {
  id,
  name: faker.name.title(),
}});

let id = 1;
const bookmarksWithCategories = categories.map(c => seq().map((_, i) => { return {
  id: id++,
  name: faker.name.findName(),
  url: faker.internet.url(),
  title: c.name,
  _links
}}));

let bookmarks = [];
bookmarksWithCategories.forEach(c => {
  bookmarks = [
    ...bookmarks,
    ...c
  ]
});

export default () => { return {
  "api/categories": {
    _embedded: {
      categories,
      _links
    }
  },
  "api/all": {
    _embedded: {
      all: bookmarksWithCategories,
      _links
    }
  },
  "api/bookmarks": {
    _embedded: {
      bookmarks,
      _links
    }
  }
}};
