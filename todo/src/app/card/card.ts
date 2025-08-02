import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';
import { Task } from '../task/task';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Task, NgIf],
  templateUrl: './card.html',
  styleUrls: ['./card.css'] // ✅ FIX: use styleUrls not styleUrl
})
export class Card{


}
