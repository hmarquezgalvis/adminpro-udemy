import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 40;

  constructor() { }

  ngOnInit() {
  }

  // actualizar1( progreso : number) {
  //   this.progreso1 = progreso;
  // }
  //
  // actualizar2( progreso : number) {
  //   this.progreso2 = progreso;
  // }
}
