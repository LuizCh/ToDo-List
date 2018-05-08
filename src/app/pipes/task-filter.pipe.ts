import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
	transform(tasks: any[], filter: string): any {
		if (!tasks || !filter) {
			return tasks;
		}
		const thisshit = tasks.filter((task) => task.state !== filter);
		debugger;
		return thisshit;
	}
}
