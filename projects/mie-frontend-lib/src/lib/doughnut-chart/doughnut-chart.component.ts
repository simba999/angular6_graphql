import { Component, OnInit, Input } from '@angular/core';
import 'chart.piecelabel.js';
import 'chartjs-plugin-piechart-outlabels';
@Component({
  selector: 'mie-lib-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @Input() chartvm;
  constructor() { }

  ngOnInit() {
  }

}
