'use strinct';

beforeEach(module('app'));

describe('test app', () => {

  var $window, AppService, sandbox;

  beforeEach(inject(function (_$window_, _AppService_) {
    $window = _$window_;
    AppService = _AppService_;
    sandbox = sinon.sandbox.create();
  }));

  afterEach(function () {
    sandbox.restore();
  });

  it('$window.location.href', () => {
    expect($window.location.href).toEqual('http://localhost:9876/');
  });

  it('AppService.test()', () => {
    expect(AppService.test()).toEqual('test');
  });
});
