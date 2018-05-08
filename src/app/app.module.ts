import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HideDeleteDirective } from './directives/hide-delete.directive';
import { HighlightButtonsDirective } from './directives/highlight-buttons.directive';
import { TaskFilterPipe } from './pipes/task-filter.pipe';

@NgModule({
	declarations: [
		AppComponent,
		TaskComponent,
		HideDeleteDirective,
		HighlightButtonsDirective,
		TaskFilterPipe
	],
	imports: [ BrowserModule, FormsModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
