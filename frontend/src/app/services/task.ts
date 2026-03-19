import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'

export interface Task {
  id?: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  creationDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private refresh = new Subject<void>();

  get refresh$() {
  return this.refresh.asObservable();
}

  private apiUrl = 'http://localhost:5133/api/Task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(task: Task): Observable<Task> {
  return this.http.post<Task>(this.apiUrl, task).pipe(
    tap(() => this.refresh.next())
  );
}

deleteTask(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`).pipe(
    tap(() => this.refresh.next())
  );
}
}
