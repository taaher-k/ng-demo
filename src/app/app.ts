import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Counter],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})





export class App {
  protected readonly title = signal('ngdemo');
}
