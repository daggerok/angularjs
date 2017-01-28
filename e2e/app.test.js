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

    it('footer has right text', () => {
      footer.getText()
        .then(console.log);
      expect(footer.getText()).toEqual('footer');
    });
  });
});
