import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: [ './task.component.scss' ]
})
export class TaskComponent implements OnInit {
	@Input() task;
	@Input() index;
	@Input() textValue;

	@Output() completeTask = new EventEmitter<any>();
	@Output() deleteTask = new EventEmitter<any>();

	constructor() {}

	onDeleteTask(deleteTheTask: string) {
		this.deleteTask.emit(deleteTheTask);
	}
	onCompleteTask(completeTheTask: string) {
		this.completeTask.emit(completeTheTask);
	}

	ngOnInit() {}
}
