import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
id=0;
title='';
description='';
status='';
statusArray=['To Do','In Progress','Done'];
  constructor(private taskService: TaskService) {}

  addTask() {
    this.id++;
    this.taskService.addTask(this.id, this.title, this.description, this.status);
  }

}
