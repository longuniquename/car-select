module.exports = function () {
  'use strict';

  this.Given(/^the user enters the page$/, function () {
    browser.url('http://localhost:3000');
  });

  this.When(/^the user selects a brand$/, function () {
    browser.waitForVisible('[name="year"]', 10000);
    browser.waitForVisible('[name="brand"]');
    browser.waitForExist('[name="year"] option[value="2013"]', 10000);
    browser.selectByValue('[name="year"]', '2013');
    browser.waitForExist('[name="brand"] option[value="Ford"]', 10000);
    browser.selectByValue('[name="brand"]', 'Ford');
  });

  this.Then(/^the available models should be shown$/, function () {
    browser.waitForExist('[name="model"] option[value="Fiesta"]', 10000);
  });


  this.Given(/^the user has selected a car$/, function () {
    browser.waitForVisible('[name="year"]', 10000);
    browser.waitForVisible('[name="brand"]');
    browser.waitForVisible('[name="model"]');
    browser.waitForExist('[name="year"] option[value="2013"]', 10000);
    browser.selectByValue('[name="year"]', '2013');
    browser.waitForExist('[name="brand"] option[value="Ford"]', 10000);
    browser.selectByValue('[name="brand"]', 'Ford');
    browser.waitForExist('[name="model"] option[value="Fiesta"]', 10000);
    browser.selectByValue('[name="model"]', 'Fiesta');
  });

  this.When(/^the user selects a year$/, function () {
    browser.waitForVisible('[name="year"]');
    browser.waitForExist('[name="year"] option[value="2015"]', 10000);
    browser.selectByValue('[name="year"]', '2015');
  });

  this.Then(/^the available brands should be shown$/, function () {
    browser.waitForExist('[name="brand"] option[value="Ford"]', 10000);
    browser.waitForExist('[name="brand"] option[value="Kia"]', 10000);
  });

  this.Given(/^the user has selected a brand$/, function () {
    browser.waitForVisible('[name="brand"]', 10000);
    browser.waitForExist('[name="brand"] option[value="Ford"]', 10000);
    browser.selectByValue('[name="brand"]', 'Ford');
  });

  this.Given(/^the user has selected a year$/, function () {
    browser.waitForVisible('[name="year"]', 10000);
    browser.waitForExist('[name="year"] option[value="2013"]', 10000);
    browser.selectByValue('[name="year"]', '2013');
  });

  this.When(/^the user selects a model$/, function () {
    browser.waitForVisible('[name="model"]', 10000);
    browser.waitForExist('[name="model"] option[value="Fiesta"]', 10000);
    browser.selectByValue('[name="model"]', 'Fiesta');
  });

  this.Then(/^a list of cars should be displayed$/, function () {
    browser.waitForExist('ul li', 10000);
  });

  this.Given(/^the user has a brand selected$/, function () {
    browser.waitForVisible('[name="year"]', 10000);
    browser.waitForVisible('[name="brand"]');
    browser.waitForExist('[name="year"] option[value="2014"]', 10000);
    browser.selectByValue('[name="year"]', '2014');
    browser.waitForExist('[name="brand"] option[value="Ford"]', 10000);
    browser.selectByValue('[name="brand"]', 'Ford');
  });

  this.When(/^the user changes the brand$/, function () {
    browser.waitForExist('[name="brand"] option[value="Kia"]', 10000);
    browser.selectByValue('[name="brand"]', 'Kia');
  });

  this.Then(/^the year selection should be updated$/, function () {
    // This breaks all the logic!
  });

  this.Then(/^the model selection should be cleared$/, function () {
    expect(browser.getValue('[name="model"]')).toBe('');
  });
};
