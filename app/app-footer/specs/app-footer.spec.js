const { endpoint } = require('../../../config/e2e.settings');

describe('app homepage', function() {

  it('should greet the named user', function() {

    // go to home page
    browser.get(endpoint);

    // search target element
    const el = element(by.css('footer.footer'));

    // getting value
    let value = el.getText();
    expect(value).toContain('daggerok');
  });
});
