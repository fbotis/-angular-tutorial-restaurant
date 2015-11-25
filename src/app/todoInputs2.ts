import {
    Component, View, FORM_DIRECTIVES
}
from "angular2/angular2";
import {
    TodoService,TodoModel
}
from "./todoService";

@
Component({
    selector: 'todo-input2',
    directives: [FORM_DIRECTIVES],
    template: `
	<form (ng-submit)="onSubmit()"> 
    	Title: <input #title type="text" [(ng-model)]="todoModel.title"> 
    	Action <input type="text" [(ng-model)]="todoModel.action">
    	<button type="submit" (click)="title.focus">Add todo</button> 
    </form>
  `
})
export class ToDoInput2 {
	todoModel: TodoModel = new TodoModel();
	title:any;

    constructor(public todoService: TodoService) {
        console.log(todoService);
    }

    onClick(event, value) {
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    }

    onSubmit(){
		this.todoService.addTodo(this.todoModel);
		this.todoModel = new TodoModel();
    }
}
