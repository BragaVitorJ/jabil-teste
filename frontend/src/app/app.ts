import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskForm],
  templateUrl: './app.html',
})
export class App {
@ViewChild('list') list!: TaskListComponent;

reloadList() {
  this.list.loadTasks();
}


}
