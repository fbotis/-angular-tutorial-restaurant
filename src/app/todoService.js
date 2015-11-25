var TodoModel = (function () {
    function TodoModel(title, action) {
        if (title === void 0) { title = ""; }
        if (action === void 0) { action = ""; }
        this.title = title;
        this.action = action;
        this.status = TodoModel.STARTED;
    }
    TodoModel.prototype.toggle = function () {
        if (this.status == TodoModel.STARTED) {
            this.status = TodoModel.COMPLTED;
        }
        else {
            this.status = TodoModel.STARTED;
        }
    };
    TodoModel.STARTED = "started";
    TodoModel.COMPLTED = "completed";
    return TodoModel;
})();
exports.TodoModel = TodoModel;
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new TodoModel("eat", "nom nom"),
            new TodoModel("sleep", "zzzzz"),
            new TodoModel("code", "type type")];
    }
    TodoService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    return TodoService;
})();
exports.TodoService = TodoService;
//# sourceMappingURL=todoService.js.map