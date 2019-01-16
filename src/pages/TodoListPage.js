class TodoListPage {
    get todoTasks() { return browser.elements('.todo'); }

    logAllTasks() {
        // this.todoTasks.forEach((el) => {
        //  console.log(' message is : ' + el.getText());
        // })
        let todoTasksText = [];
        this.todoTasks.value.forEach(function(el) {
            console.log(browser.elementIdText(el.ELEMENT).value);
            todoTasksText.push(browser.elementIdText(el.ELEMENT).value);
        });
        console.log(todoTasksText)
    }
}
export default new TodoListPage();
