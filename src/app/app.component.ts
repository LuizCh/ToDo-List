import { TaskComponent } from './task/task.component';
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'app';
	url = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';
	data$;
	inputValue = '';
	tasks: Array<task> = [];

	constructor(private http: HttpClient) {
		this.http.get<any>(this.url).subscribe((data) => {
			data.forEach((data) => {
				const theTask = new task(uuid(), data, '1');
				this.tasks.push(theTask);
			});
		});
	}

	addTask(inputText: string) {
		if (inputText !== '') {
			const theTask = new task(uuid(), inputText, '0');
			this.tasks.push(theTask);
			this.inputValue = '';
			console.log(this.tasks);
		}
	}

	deleteThisTask(taskId: string) {
		// this.tasks.splice(this.tasks[taskId], 1);
		this.tasks = this.tasks.filter((theTask) => theTask.id !== taskId);
	}

	completeThisTask(taskId: string) {
		this.tasks.forEach((data) => {
			if (data.id === taskId) {
				data.state = !data.state;
			}
		});
		// const aTask: any = this.tasks.filter((theTask) => theTask.id !== taskId);
		// aTask.state = !aTask.state;
		console.log(this.tasks);
	}
}

class task {
	public id;
	public taskText;
	public state;

	public constructor(theId: string, theText: string, theState: string) {
		this.id = theId;
		this.taskText = theText;
		this.state = theState;
	}
}
