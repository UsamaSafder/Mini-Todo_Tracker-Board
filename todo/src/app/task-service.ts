import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task = {
    id: 0,
    title: '',
    description: '',
    status: '',
  };

  meter: number = 0;
  tasks: any[] = [];
  todoTasks: any[] = [];
  inProgressTasks: any[] = [];
  doneTasks: any[] = [];


  taskUpdated: EventEmitter<void> = new EventEmitter();

  addTask(id: number, title: string, description: string, status: string) {
    console.log(`✅ addTask called with: ${title} | ${status}`);

    const newTask = {
      id,
      title,
      description,
      status
    };

    this.tasks.push(newTask);
    this.meter++;
    console.log(`📌 Total tasks added (meter): ${this.meter}`);

    if (status === 'To Do') {
      this.todoTasks.push(newTask);
    } else if (status === 'In Progress') {
      this.inProgressTasks.push(newTask);
    } else if (status === 'Done') {
      this.doneTasks.push(newTask);
    }

    console.log(`📋 All Tasks:`, this.tasks);
    console.log(`📝 To Do Tasks:`, this.todoTasks);
    console.log(`🚧 In Progress Tasks:`, this.inProgressTasks);
    console.log(`✅ Done Tasks:`, this.doneTasks);

  
    this.taskUpdated.emit();
  }
updateTodoTask(id:number,status:string){
  console.log(`✅ updateTodoTask called with ID: ${id} | Status: ${status}`);
  if(status==='In Progress'){
   
    this.todoTasks = this.todoTasks.filter(task => task.id !== id);
    const taskToUpdate = this.tasks.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.status = status;
      this.inProgressTasks.push(taskToUpdate);
        this.taskUpdated.emit();
    }
  }
  else if(status==='Done'){

    this.todoTasks = this.todoTasks.filter(task => task.id !== id);
    const taskToUpdate = this.tasks.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.status = status;
      this.doneTasks.push(taskToUpdate);
        this.taskUpdated.emit();
    }
  }
} 
updateInProgressTask(id:number,status:string){
  console.log(`✅ updateInProgressTask called with ID: ${id} | Status: ${status}`);

  if(status==='To Do'){
    
    this.inProgressTasks = this.inProgressTasks.filter(task => task.id !== id);
    const taskToUpdate = this.tasks.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.status = status;
      this.todoTasks.push(taskToUpdate);
        this.taskUpdated.emit();
    }
  } else if(status==='Done'){
    
    this.inProgressTasks = this.inProgressTasks.filter(task => task.id !== id);
    const taskToUpdate = this.tasks.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.status = status;
      this.doneTasks.push(taskToUpdate);
        this.taskUpdated.emit();
    }
  }
}

}
