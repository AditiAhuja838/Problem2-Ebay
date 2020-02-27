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




Given('search for product {string}', function (product) {
        var searchTextbox = element(by.id('twotabsearchtextbox'));
    utilitypage.waitForLocator(searchTextbox);
        searchTextbox.sendKeys(product);
});

When(/^I selected  my product$/, function () {
    var searchResultItem = element(by.id('srp-river-results-listing1'));
    searchResultItem.click();
});
When(/^Added my product to my cart$/, function () {
    var addItemButton = element(by.id('isCartBtn_btn'));
    utilitypage.waitForLocator(addItemButton);
    addItemButton.click();

    var noThanksButton = element(by.id('//button[text()="No thanks"]'));
    noThanksButton.click();
});
Then(/^I click on Checkout$/, function () {
    var buttonWithText = element(by.xpath('//button[text()="Go to checkout"]'));
    buttonWithText.click();
});
