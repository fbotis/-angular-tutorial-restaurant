import {Component, View,FORM_DIRECTIVES,CORE_DIRECTIVES} from "angular2/angular2";

@Component({
	selector: 'letter-select'
})
@View({
	directives:[FORM_DIRECTIVES,CORE_DIRECTIVES]
	template: `
		<select [(ng-model)]="selectedLetter" name="" id="">
	 	 	<option  *ng-for="#letter of letters" >{{letter}}</option>
	 	</selct>
`})
export class LetterSelect {
	letters: string[] = ["s", "e", "c"];
	selectedLetter: string = "";
}