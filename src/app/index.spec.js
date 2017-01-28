'use strinct';

beforeEach(module('app'));

describe('sorting the list of users', function () {
  it('sorts in descending order by default', function () {
    var users = [ 'jack', 'igor', 'jeff' ];
    expect(users).toEqual([ 'jack', 'igor', 'jeff' ]);
  });
});
