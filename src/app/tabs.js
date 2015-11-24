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
var tab_1 = require('./tab');
var Tabs = (function () {
    function Tabs() {
    }
    // contentChildren are set
    Tabs.prototype.afterContentInit = function () {
        if (!_hasActiveTab(this.tabs)) {
            this.selectTab(this.tabs.first);
        }
        function _hasActiveTab(tabs) {
            // check if some tab has set active via inputs
            var activeTabs = tabs.filter(function (tab) { return tab.active; });
            return Boolean(activeTabs.length);
        }
    };
    Tabs.prototype.selectTab = function (tab) {
        _deactivateAllTabs(this.tabs.toArray());
        tab.active = true;
        function _deactivateAllTabs(tabs) {
            tabs.forEach(function (tab) { return tab.active = false; });
        }
    };
    __decorate([
        angular2_1.ContentChildren(tab_1.Tab), 
        __metadata('design:type', angular2_1.QueryList)
    ], Tabs.prototype, "tabs");
    Tabs = __decorate([
        angular2_1.Component({
            selector: 'tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ng-for=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map