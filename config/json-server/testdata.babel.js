// https://github.com/stympy/faker
import faker from 'faker';

faker.locale = 'ru';

const size = 5;
const seq = Array(size).fill();

const posts = seq.map((_, id) => { return {
  id,
  subject: faker.lorem.sentence(),
  body: seq.map((_, id) => faker.lorem.paragraphs(size, true)),
  tags: faker.lorem.words(size),
  category: faker.internet.domainSuffix()
}});

const users = seq.map((_, id) => { return {
  id,
  name: faker.name.findName(),
  email: faker.internet.email('who.hoo')
}});

const categories = seq.map((_, id) => { return {
  id,
  name: faker.internet.domainSuffix()
}});

export default () => { return {
  "posts": {
    _embedded: {
      posts,
      _links: []
    }
  },
  "users": {
    _embedded: {
      users,
      _links: []
    }
  },
  "categories": {
    _embedded: {
      categories,
      _links: []
    }
  }
}};
