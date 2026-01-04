import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App implements OnDestroy {

  isDestroyed = true;
  CountDown = 10;
  IntervalId: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.IntervalId = setInterval(() => {
      this.CountDown--;

      if (this.CountDown <= 0) {
        clearInterval(this.IntervalId);
        this.isDestroyed = false;
      }

      this.cdr.detectChanges(); // <- clave con CSP
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.IntervalId);
  }
}
