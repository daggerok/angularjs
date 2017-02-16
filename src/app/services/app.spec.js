'use strinct';

beforeEach(module('app'));

describe('test app', () => {

  let $window, AppService, sandbox;

  beforeEach(inject((_$window_, _AppService_) => {
    $window = _$window_;
    AppService = _AppService_;
    sandbox = sinon.sandbox.create();
  }));

  afterEach(() => {
    sandbox.restore();
  });

  it('$window.location.href', () => {
    expect($window.location.href).toEqual('http://localhost:9876/');
  });

  it('AppService.test()', () => {
    expect(AppService.test()).toEqual('test');
  });

  it('mocking using sinon', () => {
    sandbox.stub(AppService, 'test').returns('mock');
    expect(AppService.test()).toEqual('mock');
  });
});