import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'],
})
export class Counter {
  public currentCount = 0;
  public isLimitReached = false;

  public increment() {
    this.currentCount++;
    if (this.currentCount >= 10) {
      this.isLimitReached = true;
    }
  }
}