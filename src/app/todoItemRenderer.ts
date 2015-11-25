import {Component, View, Input, NgClass, ViewEncapsulation} from "angular2/angular2";
import {TodoModel} from "./todoService";


@Component({
	selector: 'todo-item-renderer'
})
@View({
	encapsulation: ViewEncapsulation.Native,
	directives: [NgClass],
	styles: [`
		.${TodoModel.STARTED}{
			color: green;
		}

		.${TodoModel.COMPLTED} {
			text-decoration:line-through;
		}

	`],
	template: `
	<div>
		<span [ng-class]="todo.status">
		{{todo.title}} | {{todo.action}}
		</span>
		<button (click)="todo.toggle()">Toggle</button>
		</div>
	</div>
	`
})
export class TodoItemRenderer {
	@Input() todo: TodoModel;

}
