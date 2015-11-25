export class TodoModel {
	static STARTED: string = "started";
	static COMPLTED: string = "completed";
	
	status: string = TodoModel.STARTED;

	constructor(
		public title: string = "",
		public action: string ="") {

	}

	toggle():void{
		if (this.status == TodoModel.STARTED) {
			this.status = TodoModel.COMPLTED;
		}else{
			this.status = TodoModel.STARTED;
		}
	}
}


export class TodoService {
	todos: TodoModel[] = [
		new TodoModel("eat","nom nom"),
		new TodoModel("sleep","zzzzz"),
		new TodoModel("code","type type")];

	addTodo(value: TodoModel): void {
		this.todos.push(value);
	}
}