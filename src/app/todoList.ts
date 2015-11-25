import {bootstrap, Component, View,NgFor} from "angular2/angular2";
import {ToDoInput} from "./todoInputs";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startsWith";
import {LetterSelect} from "./letterSelect";
import {TodoSearch} from "./todoSearch";
import {SimpleSearch} from "./simpleSearch";
import {FieldForm} from "./fieldForm";

@Component({
	selector: 'todo-list',
})
@View({
	pipes:[StartsWith,SimpleSearch],
	directives:[NgFor,TodoItemRenderer,LetterSelect,TodoSearch,FieldForm	],
	template: `
	<div>
		<field-form #field-form></field-form>
		<todo-search #todo-search></todo-search>
	 	<todo-item-renderer
	 	*ng-for="#todo of todoService.todos 
	 	| startsWith: 'title' :letterSelect.selectedLetter 
	 	| simpleSearch: fieldForm.selectedFields : todoSearch.term"
	 	[todo]="todo"/>
	 	</todo-item-renderer>

	 	<letter-select #letter-select></letter-select>
	</div>
	`
})
export class TodoList {
	constructor(
		public todoService:TodoService){

	}

}