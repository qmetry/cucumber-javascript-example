// This file sets up the environment for tests in cucumber js.

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})