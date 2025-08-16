import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service';
import { Card } from '../card/card';

@Component({
  selector: 'app-task',
  imports: [CommonModule,FormsModule,Card],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task implements OnInit {
id=0;
title='';
description='';
status='';
statusArray=['To Do','In Progress','Done'];
statusTodo='';
statusInProgress='';
statusDone='';
  constructor(private taskService: TaskService) {}

  check=false;
  addTask() {
    this.id++;
    this.taskService.addTask(this.id, this.title, this.description, this.status);
    this.check = true;
    this.title = '';
    this.description = '';
    this.status = '';
  }
 
  
  todoTasks: any[] = [];
  inProgressTasks: any[] = [];
  doneTasks: any[] = [];

 

  ngOnInit() {
   
    this.refreshTaskLists();

    console.log('Card component initialized');
    
    this.taskService.taskUpdated.subscribe(() => {
      this.refreshTaskLists();
      console.log('Task list updated');
      console.log('Todo Tasks:', this.todoTasks);
      console.log('In Progress Tasks:', this.inProgressTasks);
      console.log('Done Tasks:', this.doneTasks);
    });
  }

  refreshTaskLists() {
      
    this.todoTasks = this.taskService.todoTasks
    this.inProgressTasks = this.taskService.inProgressTasks;
    this.doneTasks = this.taskService.doneTasks;
  
  }
  moveTask(id:number,status:string) {
    if(status === 'To Do') {
    this.taskService.updateTodoTask(id,this.statusTodo);
    this.refreshTaskLists();
    this.ngOnInit();
    }
    if(status === 'In Progress') {
      this.taskService.updateInProgressTask(id,this.statusInProgress);
      this.refreshTaskLists();
      this.ngOnInit();
    }
  }


}
