class TestPage {
    get searchButton() { return browser.element('#main > div > form > div > div > div > button'); }


    clickSearchButton() {
        this.searchButton.waitForVisible(5000);
        this.searchButton.click();
    }
}
export default new TestPage();
