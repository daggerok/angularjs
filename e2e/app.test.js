/*

 Protractor API

 browser.get('yoururl'); // Load address, can also use '#yourpage'
 browser.navigate().back();
 browser.navigate().forward();
 browser.sleep(10000); // if your test is outrunning the browser
 browser.waitForAngular(); // if your test is outrunning the browser
 browser.getLocationAbsUrl() // get the current addres
 browser.ignoreSynchronization = true; // If true, Protractor will not attempt to synchronize with the page before performing actions

 browser.wait(function() {
  return element(by.id('create')).isPresent();
 }, 5000);

 element(by.id('create')).click();
 element(by.id('create')).isPresent() // Be careful with this: element is often present while it's not displayed...
 element(by.id('create')).isEnabled() //Enabled/disabled, as in ng-disabled...
 element(by.id('create')).isDisplayed() //Is element currently visible/displayed?

 element(by.id('user_name'));
 element(by.css('#myItem'));
 element(by.model('person.name')); // refers to ng-model directive
 element(by.binding('person.concatName')); // refers to ng-bind directive
 element(by.textarea('person.extraDetails'));
 element(by.input('username'));
 element(by.input('username')).clear();
 element(by.buttonText('Save'));
 element(by.partialButtonText('Save'));
 element(by.linkText('Save'));
 element(by.partialLinkText('Save'));
 element(by.css('[ng-click="cancel()"]'));
 var dog = element(by.cssContainingText('.pet', 'Dog'));
 var allOptions = element.all(by.options('c c in colors')); //When ng-options is used with selectbox

 var list = element.all(by.css('.items'));
 list = element.all(by.repeater('personhome.results'));
 list = element.all(by.xpath('div'));
 expect(list.count()).toBe(3);
 expect(list.get(0).getText()).toBe('First’);
 expect(list.get(1).getText()).toBe('Second’);
 expect(list.first().getText()).toBe('First’);
 expect(list.last().getText()).toBe('Last’);

 element(by.id('user_name').sendKeys("user1");
 sendKeys(protractor.Key.ENTER);
 sendKeys(protractor.Key.TAB);
 element(by.id('user_name')).clear();

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
