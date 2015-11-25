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
var LetterSelect = (function () {
    function LetterSelect() {
        this.letters = ["s", "e", "c"];
        this.selectedLetter = "";
    }
    LetterSelect = __decorate([
        angular2_1.Component({
            selector: 'letter-select'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            template: "\n\t\t<select [(ng-model)]=\"selectedLetter\" name=\"\" id=\"\">\n\t \t \t<option  *ng-for=\"#letter of letters\" >{{letter}}</option>\n\t \t</selct>\n" }), 
        __metadata('design:paramtypes', [])
    ], LetterSelect);
    return LetterSelect;
})();
exports.LetterSelect = LetterSelect;
//# sourceMappingURL=letterSelect.js.map