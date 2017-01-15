import faker from 'faker';

const size = 15;
const seq = Array(size / 3).fill();

const categories = seq.map((_, id) => ({
  id,
  name: faker.name.title(),
}));

console.log('categories', categories);

let bookmarks = [];

categories.forEach(c => {
  const portion = seq.map((_, id) => ({
    category: c,
    id: `${c.id}${id}`,
    url: faker.internet.url(),
    title: faker.name.findName(),
  }));
  bookmarks = [...bookmarks, ...portion];
});

// console.log('bookmarks', bookmarks);

export default () => ({
  'categories': {
    _embedded: {
      categories,
      _links: [],
    },
  },
  'bookmarks': {
    _embedded: {
      bookmarks,
      _links: [],
    },
  },
});
