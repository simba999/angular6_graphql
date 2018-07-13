import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';

class CompElement {
  name: string;
  value: string;
  year: string;
}

@Component({
  selector: 'mie-lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public comp: CompElement[] = [
    { name: 'CBRE', value: '20.4%', year: '2008' },
    { name: 'JLL', value: '7.4%', year: '2009' },
    { name: 'BNP Paribas', value: '6.7%', year: '2010' },
    { name: 'Colliers', value: '0.8%', year: '2011' },
    { name: 'Cushman & Wakefield', value: '3.8%', year: '2012' },
    { name: 'Eastdil Secured', value: '6.2%', year: '2013' },
    { name: 'HFF', value: '7.4%', year: '2014' },
    { name: 'Knight frank', value: '3.6%', year: '2015' },
    { name: 'Marcus & Millichap', value: '0.8%', year: '2016' },
    { name: 'Savills', value: '8.9%', year: '2017' },
    { name: 'Other', value: '6.8%', year: '2018' },
    { name: 'Dummy', value: '8.9%', year: '2019' },
    { name: 'Dummy 2', value: '6.8%', year: '2020' },
    { name: 'CBRE', value: '20.4%', year: '2008' },
    { name: 'JLL', value: '7.4%', year: '2009' },
    { name: 'CBRE', value: '20.4%', year: '2008' },
    { name: 'JLL', value: '7.4%', year: '2009' },
    { name: 'BNP Paribas', value: '6.7%', year: '2010' },
    { name: 'Dummy 2', value: '6.8%', year: '2020' }
  ];

  displayedColumns: string[] = ['name', 'value', 'year'];
  dataSource = new MatTableDataSource<CompElement>(this.comp);

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
      'hover': {
        'animationDuration': 0
      },
      tooltips: {
        'enabled': false
      },
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
    chartData: [20.4, 7.4, 6.7, 0.8, 3.8, 6.2, 7.4, 3.6, 0.8, 8.9, 6.8],
    chartLegend: true,
    chartColors: [{ backgroundColor: '#989898' }],
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  close(): void {
    this.dialogRef.close('The popup is closed');
  }

}
