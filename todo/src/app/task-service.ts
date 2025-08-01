import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task={
    id: 0,
    title: '',
    description: '',
    status: '',
  }
  tasks: any[] = [];
  addTask(id:number, title: string, description: string, status: string) {
  this.task.id = id;
  this.task.title = title;
  this.task.description = description;
  this.task.status = status;
    this.tasks.push(this.task);
    this.task = { id: 0, title: '', description: '', status: '' }; // Reset task after adding
    console.log(this.tasks);
  }

    
  
}
