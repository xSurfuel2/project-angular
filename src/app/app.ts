import { Component, ChangeDetectorRef, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App implements DoCheck, OnDestroy {

  value = 0;
  previousValue = 0;
  changesDetected = false;

  private timeoutId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  updateValue(): void {
    this.value++;

    // Marca el cambio (para que se vea el <p>)
    this.changesDetected = true;

    // Reinicia el “apagado” de 2s
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.changesDetected = false;
      this.cdr.detectChanges();
    }, 2000);

    this.cdr.detectChanges();
  }

  ngDoCheck(): void {
    if (this.value !== this.previousValue) {
      // Esto ya lo marcas arriba, pero lo dejo por tu ejercicio
      this.previousValue = this.value;
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}
