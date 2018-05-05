import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-doughnut',
  templateUrl: './graphic-doughnut.component.html',
  styles: []
})
export class GraphicDoughnutComponent implements OnInit {

  @Input() Labels: string[] = ['Lebal 1', 'Label 2', 'Label 3'];
  @Input() Data: number[] = [350, 450, 100];
  @Input() Legend: string = 'Legend';

  Type: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
