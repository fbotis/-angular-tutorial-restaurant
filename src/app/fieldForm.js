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
var FieldForm = (function () {
    function FieldForm() {
        this.form = new angular2_1.ControlGroup({
            title: new angular2_1.Control(true),
            action: new angular2_1.Control(true),
        });
    }
    Object.defineProperty(FieldForm.prototype, "selectedFields", {
        get: function () {
            var _this = this;
            return Object
                .keys(this.form.controls)
                .filter(function (key) { return _this.form.controls[key].value; });
        },
        enumerable: true,
        configurable: true
    });
    FieldForm = __decorate([
        angular2_1.Component({
            directives: [angular2_1.FORM_DIRECTIVES],
            selector: 'field-form',
            template: "\n    <form [ng-form-model]=\"form\">\n    \tTitle: <input type=\"checkbox\" ng-control=\"title\">\n    \tAction: <input type=\"checkbox\" ng-control=\"action\">\n    </form>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FieldForm);
    return FieldForm;
})();
exports.FieldForm = FieldForm;
//# sourceMappingURL=fieldForm.js.map