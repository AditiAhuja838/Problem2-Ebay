"use strict";

const config = require('../Utility/config.json')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
let utilitypage = require('../Utility/utility');

Given(/^I log in as  an ebay customer$/, function () {
    browser.get(config.url);
});
Given(/^I clicked on SignIn button on the home page$/, function () {
    var signInButton = element(by.xpath('//a[text()="Sign in"]'));
    utilitypage.waitForLocator(signInButton);
    signInButton.click();
});
Given('I enter valid username {string}', function (usrname) {
    var username = element(by.id('userid'));
    utilitypage. waitForLocator(username);
    username.sendKeys(usrname);
    var continueButton = element(by.id('continue'));
    continueButton.click();

});
Given('I enter valid password {string}', function (passwd) {
    var password = element(by.id('ap_password'));
    utilitypage.waitForLocator(password);
    password.sendKeys(passwd);

});
Given(/^I click on Submit button$/, function () {
    var SubmitButton = element(by.id('signInSubmit'));
    utilitypage.waitForLocator(SubmitButton);
    SubmitButton.click();
});