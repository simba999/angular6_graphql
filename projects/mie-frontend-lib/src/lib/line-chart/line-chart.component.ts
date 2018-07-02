import { Component, OnInit, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
@Component({
  selector: 'mie-lib-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() chartvm;
  constructor() { }

  ngOnInit() {
  }

}
