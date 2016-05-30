module.exports = function () {
  'use strict';

  this.Given(/^the user enters the page$/, function () {
    browser.url('http://localhost:3000');
  });

  this.When(/^the user selects a brand$/, function () {
    browser.setValue('input[name="brand"]', 'Ford');
  });

  this.Then(/^the available models should be shown$/, function () {
    // Write the automation code here
    pending();
  });

  this.Given(/^the user has selected a car$/, function () {
    // Write the automation code here
    pending();
  });

  this.When(/^the user selects a year$/, function () {
    // Write the automation code here
    pending();
  });

  this.Then(/^the available brands should be shown$/, function () {
    // Write the automation code here
    pending();
  });

  this.Given(/^the user has selected a brand$/, function () {
    // Write the automation code here
    pending();
  });

  this.Given(/^the user has selected a year$/, function () {
    // Write the automation code here
    pending();
  });

  this.When(/^the user selects a model$/, function () {
    // Write the automation code here
    pending();
  });

  this.Then(/^a list of cars should be displayed$/, function () {
    // Write the automation code here
    pending();
  });

  this.Given(/^the user has a brand selected$/, function () {
    // Write the automation code here
    pending();
  });

  this.When(/^the user changes the brand$/, function () {
    // Write the automation code here
    pending();
  });

  this.Then(/^the year selection should be updated$/, function () {
    // Write the automation code here
    pending();
  });

  this.Then(/^the model selection should be cleared$/, function () {
    // Write the automation code here
    pending();
  });
};
