import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  task = {
    title: '',
    description: '',
    priority: 'normal',
    status: 'not started'
  };

  constructor(private taskService: TaskService) {}

submit() {
  this.taskService.createTask(this.task).subscribe(() => {
    alert('Tarefa criada!');

    this.task = {
      title: '',
      description: '',
      priority: 'normal',
      status: 'not started'
    };
  });
}
}
