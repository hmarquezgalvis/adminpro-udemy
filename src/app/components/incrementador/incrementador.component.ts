import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input("nombre") leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number) {
    if (this.progreso + valor >= 100 ) {
      this.progreso = 100;
    }
    else if (this.progreso + valor < 0) {
      this.progreso = 0;
    }
    else {
      this.progreso = this.progreso + valor;
    }

    // emite el cambio de valor de la variable progreso
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChanges( newValue: number ) {
    if (newValue >= 100 ) {
      this.progreso = 100;
    }
    else if (newValue === null && newValue < 0) {
      this.progreso = 0;
    }
    else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
