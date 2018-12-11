import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, When, Then }) => {
    Given(/^I navigate to google$/, { wrapperOptions: { retry: 2 } }, () => {
        const url = browser.options.baseUrl;
        browser.url(url);
    });

    When(/^I type "([^"]*)"$/, (userInput) => {
        browser.setValue('input[name="q"]',userInput);
    });

    When(/^I press enter$/, () => {
        browser.click('#main > div > form > div > div > div > button');
    });

    Then(/^search result found$/, () => {
        expect(browser.isVisible('#cnt')).to.be.true;
    });
});