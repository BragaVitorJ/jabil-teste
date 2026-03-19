import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();

    this.taskService.refresh$.subscribe(() => {
    this.loadTasks();
    });
  }

    loadTasks() {
    this.taskService.getTasks().subscribe(data => {
    console.log(data);
    this.tasks = data;
  });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
