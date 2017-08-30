//This file contains step definitions for the feature file. 

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  Given('I open Google chrome',{timeout: 60 * 1000}, function() {
      return this.driver.get('http://www.google.com/ncr');
   
  });

  Then('I search for QMetry',{timeout: 60 * 1000}, function () {
       return this.driver.quit();
  });

});