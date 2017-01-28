describe('home page', () => {

  beforeEach(() => {
    browser.get('http://localhost:3000/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('protractor');
  });

  describe('footer', () => {

    let footer;

    beforeEach(() => {
      footer = browser.element(by.css('footer'))
    });

    it('should have footer', () => {
      expect(footer.isPresent()).toEqual(true);
    });

    it('footer has correct text', () => {
      // everything is a promise:
      footer.getText()
        .then(text => expect(text).toEqual('footer'));
      // but jasmine can handle promises as regular string
      expect(footer.getText()).toEqual('footer');
    });
  });
});
