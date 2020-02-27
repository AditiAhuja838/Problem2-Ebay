
'use strict';
module.exports = {
    waitForLocator: (locator) => {

        var EC = protractor.ExpectedConditions;
        var ele = element(locator)
        browser.wait(EC.visibilityOf(ele), 500000, "Error:unable to find locator");
    },

    getURL: () => {
        return "https://www.ebay.com.au";
    }
}