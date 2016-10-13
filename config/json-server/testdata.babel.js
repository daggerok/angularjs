import faker from 'faker';

const size = 15;
const seq = Array(size).fill();

const categories = seq.map((_, id) => { return {
  id,
  name: faker.name.title(),
}});

const bookmarks = categories.map((c, id) => { return {
  id: c.id,
  title: faker.name.findName(),
  url: faker.internet.url(),
  category: c.name
}});

export default () => { return {
  "api/categories": {
    _embedded: {
      categories,
      _links: []
    }
  },
  "api/bookmarks": {
    _embedded: {
      bookmarks,
      _links: []
    }
  }
}};
