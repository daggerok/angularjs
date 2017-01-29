/*
 Jasmine Matchers

 to(Not)Be( null | true | false )
 to(Not)Equal( value )
 to(Not)Match( regex | string )
 toBeDefined()
 toBeUndefined()
 toBeNull()
 toBeTruthy()
 toBeFalsy()
 to(Not)Contain( string )
 toBeLessThan( number )
 toBeGreaterThan( number )
 toBeNaN()
 toBeCloseTo( number, precision )
 toThrow()
*/

'use strinct';

beforeEach(module('app'));

describe('test app component', () => {

  let $componentController, sandbox;

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
    sandbox = sinon.sandbox.create();
  }));

  it('should expose component `greeting` object', () => {
    let binding = { greeting: 'test-test' };
    let ctrl = $componentController('app', null, binding);

    expect(ctrl).toBeDefined();
    expect(ctrl.$ctrl).toBeDefined();

    expect(ctrl).toBe(ctrl.$ctrl);
    expect(ctrl.greeting).toBe(ctrl.$ctrl.greeting);

    expect(ctrl.greeting).toBe('test-test');
    expect(ctrl.$ctrl.greeting).toBe('test-test');
  });
});
