var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var ToDoInput2 = (function () {
    function ToDoInput2(todoService) {
        this.todoService = todoService;
        this.todoModel = new todoService_1.TodoModel();
        console.log(todoService);
    }
    ToDoInput2.prototype.onClick = function (event, value) {
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    };
    ToDoInput2.prototype.onSubmit = function () {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new todoService_1.TodoModel();
    };
    ToDoInput2 = __decorate([
        angular2_1.Component({
            selector: 'todo-input2',
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n\t<form (ng-submit)=\"onSubmit()\"> \n    \tTitle: <input #title type=\"text\" [(ng-model)]=\"todoModel.title\"> \n    \tAction <input type=\"text\" [(ng-model)]=\"todoModel.action\">\n    \t<button type=\"submit\" (click)=\"title.focus\">Add todo</button> \n    </form>\n  "
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], ToDoInput2);
    return ToDoInput2;
})();
exports.ToDoInput2 = ToDoInput2;
//# sourceMappingURL=todoInputs2.js.map