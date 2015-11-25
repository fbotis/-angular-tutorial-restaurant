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
var angular2_1 = require('angular2/angular2');
var tabs_1 = require('./tabs');
var tab_1 = require('./tab');
var todoInputs_1 = require('./todoInputs');
var todoInputs2_1 = require('./todoInputs2');
var todoService_1 = require('./todoService');
var todoList_1 = require('./todoList');
var fieldForm_1 = require('./fieldForm');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return {
            'selected': hero === this.selectedHero
        };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n <h2>My Heroes</h2>\n<ul class=\"heroes\">\n    <li *ng-for=\"#hero of heroes\" (click)=\"onSelect(hero)\" [ng-class]=\"getSelectedClass(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n<div *ng-if=\"selectedHero\">\n  <h2>{{selectedHero.name}} details!</h2>\n  <div><label>id: </label>{{selectedHero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></input>\n  </div>\n</div>\n\n<tabs>\n  <tab tab-title=\"Title 1\">\n    Content of tab Foo\n  </tab>\n  <tab tab-title=\"Tab title 2\">\n    Content of tab Bar\n  </tab>\n</tabs>\n<todo-input></todo-input>\n<todo-input2></todo-input2>\n<todo-list></todo-list>\n<field-form></field-form>\n\n\n  ",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, tab_1.Tab, tabs_1.Tabs, todoInputs_1.ToDoInput, todoInputs2_1.ToDoInput2, todoList_1.TodoList, fieldForm_1.FieldForm],
            styles: ["\n  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n  .heroes li:hover {color: #369; background-color: #EEF; left: .2em;}\n  .heroes .badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n  }\n  .selected { background-color: #EEE; color: #369; }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [todoService_1.TodoService]);
//# sourceMappingURL=app.js.map