import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task/task';
import { Board } from './board/board';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Task,Board,Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
}
