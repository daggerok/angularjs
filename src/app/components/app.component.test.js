// http://chaijs.com/api/bdd/

beforeEach(module('app'));

describe('test app', () => {

  let $window;

  beforeEach(inject((_$window_) => {
    $window = _$window_;
  }));

  it('$window.location.href', () => {
    expect($window.location.href).to.equal('http://localhost:9876/');
  });
});
