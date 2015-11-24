import { Component, NgFor, ContentChildren, QueryList, AfterContentInit } from 'angular2/angular2';
import { Tab } from './tab';

@Component({
	selector: 'tabs',
	template: `
    <ul class="nav nav-tabs">
      <li *ng-for="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
	directives: [NgFor]
})
export class Tabs implements AfterContentInit {

	@ContentChildren(Tab) tabs: QueryList<Tab>;
  
	// contentChildren are set
	afterContentInit() {

		if (!_hasActiveTab(this.tabs)) {
			this.selectTab(this.tabs.first);
		}

		function _hasActiveTab(tabs: QueryList<Tab>) {
			// check if some tab has set active via inputs
			let activeTabs = tabs.filter((tab) => tab.active);
			return Boolean(activeTabs.length);
		}

	}
	selectTab(tab: Tab) {

		_deactivateAllTabs(this.tabs.toArray());
		tab.active = true;

		function _deactivateAllTabs(tabs: Tab[]) {
			tabs.forEach((tab) => tab.active = false);
		}

	}


}
