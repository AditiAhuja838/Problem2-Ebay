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


    Then('enter my street address {string}', function (fulladdress) {
        var address = element(by.id('addressSugg'));
        address.sendKeys(fulladdress);

        var selectsecondrow = element(by.id('addressSugg_listitem1'));
        selectsecondrow.click();

});


Then(/^enter mobile number "([^"]*)"$/, function () {
    var mobileno = element(by.id('phoneFlagComp1'));
    mobileno.sendKeys("0499999999");
});
Then(/^click on continue button$/, function () {
    var continueButton = element(by.id('sbtBtn'));
    continueButton.click();
});
Then(/^I am on the checkout Page$/, function () {
    var title=browser.getTitle();
    expect(title).toEqual('Checkout');
});