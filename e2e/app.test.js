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

    it('should be presented', () => {
      expect(footer.isPresent()).toEqual(true);
    });

    it('should have correct text', () => {
      // everything is a promise:
      footer.getText()
        .then(text => expect(text).toEqual('footer'));
      // but jasmine can handle promises as regular string
      expect(footer.getText()).toEqual('footer');
    });

    describe('position', () => {

      it('should have correct location', () => {
        footer.getLocation().then(location => {
          const { x, y } = location;

          console.log(`x: ${x}, y: ${y}`);
          expect(x).toEqual(0);
          expect(y).toEqual(40);
        });
      });

      it('should have correct size', () => {
        footer.getSize().then(size => {
          const { width, height } = size;

          console.log(`width: ${width}, height: ${height}`);
          expect(width).toEqual(925);
          expect(height).toEqual(20);
        });
      });
    });
  });
});
