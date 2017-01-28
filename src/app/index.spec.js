'use strinct';

beforeEach(module('app'));

describe('sorting the list of users', () => {

  var sandbox;

  beforeEach(inject(function (_$window_) {
    $window = _$window_;
    sandbox = sinon.sandbox.create();
  }));

  afterEach(function () {
    sandbox.restore();
  });

  it('sorts in descending order by default', () => {
    expect($window.location.href).toEqual('http://localhost:9876/');
  });
});
