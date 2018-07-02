import { Component, OnInit, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';

@Component({
  selector: 'mie-lib-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() chartvm;
  constructor() { }

  ngOnInit() {
  }

}
