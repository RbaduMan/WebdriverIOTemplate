import { defineSupportCode } from 'cucumber';
import todoListPage from '../pages/TodoListPage';

defineSupportCode(({ Given, When, Then }) => {
    Given(/^I navigate to Todo list site$/, { wrapperOptions: { retry: 2 } }, () => {
        const url = browser.options.baseUrl;
        browser.url(url);
    });

    When(/^I enter task "([^"]*)"$/, (userInput) => {
        browser.setValue('.new-todo', userInput);
        browser.keys('Enter');
    });

    When(/^I see all active tasks$/, () => {
        todoListPage.logAllTasks();
    });

});
