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
var TodoItemRenderer = (function () {
    function TodoItemRenderer() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todoService_1.TodoModel)
    ], TodoItemRenderer.prototype, "todo");
    TodoItemRenderer = __decorate([
        angular2_1.Component({
            selector: 'todo-item-renderer'
        }),
        angular2_1.View({
            encapsulation: angular2_1.ViewEncapsulation.Native,
            directives: [angular2_1.NgClass],
            styles: [("\n\t\t." + todoService_1.TodoModel.STARTED + "{\n\t\t\tcolor: green;\n\t\t}\n\n\t\t." + todoService_1.TodoModel.COMPLTED + " {\n\t\t\ttext-decoration:line-through;\n\t\t}\n\n\t")],
            template: "\n\t<div>\n\t\t<span [ng-class]=\"todo.status\">\n\t\t{{todo.title}} | {{todo.action}}\n\t\t</span>\n\t\t<button (click)=\"todo.toggle()\">Toggle</button>\n\t\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRenderer);
    return TodoItemRenderer;
})();
exports.TodoItemRenderer = TodoItemRenderer;
//# sourceMappingURL=todoItemRenderer.js.map