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
var todoItemRenderer_1 = require("./todoItemRenderer");
var startsWith_1 = require("./startsWith");
var letterSelect_1 = require("./letterSelect");
var todoSearch_1 = require("./todoSearch");
var simpleSearch_1 = require("./simpleSearch");
var fieldForm_1 = require("./fieldForm");
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
    }
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list',
        }),
        angular2_1.View({
            pipes: [startsWith_1.StartsWith, simpleSearch_1.SimpleSearch],
            directives: [angular2_1.NgFor, todoItemRenderer_1.TodoItemRenderer, letterSelect_1.LetterSelect, todoSearch_1.TodoSearch, fieldForm_1.FieldForm],
            template: "\n\t<div>\n\t\t<field-form #field-form></field-form>\n\t\t<todo-search #todo-search></todo-search>\n\t \t<todo-item-renderer\n\t \t*ng-for=\"#todo of todoService.todos \n\t \t| startsWith: 'title' :letterSelect.selectedLetter \n\t \t| simpleSearch: fieldForm.selectedFields : todoSearch.term\"\n\t \t[todo]=\"todo\"/>\n\t \t</todo-item-renderer>\n\n\t \t<letter-select #letter-select></letter-select>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
//# sourceMappingURL=todoList.js.map