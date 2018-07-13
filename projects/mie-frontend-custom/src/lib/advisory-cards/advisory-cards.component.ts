import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mie-lib-advisory-cards',
  templateUrl: './advisory-cards.component.html',
  styleUrls: ['./advisory-cards.component.scss']
})
export class AdvisoryCardsComponent implements OnInit {

  // @ViewChild('content') content: ElementRef;
  public title = 'hello cards';
  cards = [
    { id: 1, title: 'Average Revenue', sourceName: 'System Name', cols: 1, rows: 1 },
    { id: 2, title: 'Head Count vs Revenue', sourceName: 'System Name', cols: 1, rows: 1 },
    { id: 3, title: 'Position', sourceName: 'MIX', cols: 1, rows: 1 },
    { id: 4, title: 'Position Over Time', sourceName: 'System Name', cols: 1, rows: 1 },
    { id: 5, title: 'CBRE vs Market Volume', sourceName: 'System Name', cols: 1, rows: 1 },
    { id: 6, title: 'Segment Breakdown', sourceName: 'System Name', cols: 1, rows: 1 },
  ];

  public barChartdata = {
    chartOptions: [{
      scaleShowVerticalLines: false,
      scaleShowValues: true,
      responsive: true,
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          categoryPercentage: 0.4,
          barPercentage: 2,
          gridLines: {
            display: false
          },
          ticks: {
            min: 10,
            steps: 10,
            stepValue: 10
          }
        }]
      },
      'hover': { 'animationDuration': 0 },
      tooltips: { 'enabled': false },
      'animation': {
        'duration': 1,
        'onComplete': function () {
          const chartInstance = this.chart,
            ctx = chartInstance.ctx;
          this.data.datasets.forEach(function (dataset, i) {
            const meta: any = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              const data: any = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 3);
            });
          });
        }
      }
    }],
    chartLabels: ['CBRE', 'JLL', 'BNP Paribas', 'Colliers', 'Cushman & Wakefield',
      'Eastdil Secured', 'HFF', 'Knight frank', 'Marcus & Millichap', 'Savills', 'Other'],
    chartType: 'horizontalBar',
    chartData: [20.4, 7.4, 6.7, 0.8, 3.8, 6.2, 7.4, 3.6, 0.8, 8.9, 6.8]
  };


  constructor() { }

  ngOnInit() {
  }

}
