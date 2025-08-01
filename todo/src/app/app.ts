import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task/task';
import { Board } from './board/board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Task,Board],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
}
