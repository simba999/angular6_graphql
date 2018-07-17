import { Component, OnInit, ViewChild, Inject, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as jsPDF from 'jspdf';

class CompElement {
  position: number;
  name: string;
  value: string;
  year: string;
}

@Component({
  selector: 'mie-lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() config: any;
  @Input() selectedLocation: any;
  @Input() selectedDashView: any;
  @ViewChild('tablePanel', { read: ElementRef }) public tablePanel: ElementRef<any>;
  @ViewChild('leftTablePanel') public leftTablePanel: ElementRef<any>;
  public availableWidgets: any[];
  public displayedFirstColumns = ['name'];
  public displayedColumns: any = [];

  public comp: CompElement[] = [
    { position: 1, name: 'CBRE', year: '2008', value: '20.4%' },
    { position: 2, name: 'JLL', year: '2009', value: '7.4%' },
    { position: 3, name: 'BNP', year: '2010', value: '6.7%' },
    { position: 4, name: 'Paribas Colliers', year: '2011', value: '0.8%' },
    { position: 5, name: 'Cushman & Wakefield', year: '2012', value: '3.8%' },
    { position: 6, name: 'Eastdil Secured', year: '2013', value: '6.28%' },
    { position: 7, name: 'HFF', year: '2014', value: '7.41%' },
    { position: 8, name: 'Knight frank', year: '2015', value: '7.42%' },
    { position: 9, name: 'Marcus & Millichap', year: '2016', value: '6.26%' },
    { position: 10, name: 'Savills', year: '2017', value: '0.81%' },
    { position: 11, name: 'Others', year: '2018', value: '7.49%' }
  ];

  dataSource = this.comp;

  public barChartdata = {
    chartOptions: {
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
    },
    chartLabels: ['CBRE', 'JLL', 'BNP Paribas', 'Colliers', 'Cushman & Wakefield',
      'Eastdil Secured', 'HFF', 'Knight frank', 'Marcus & Millichap', 'Savills', 'Other'],
    chartType: 'horizontalBar',
    chartData: [20.4, 7.4, 6.7, 0.8, 3.8, 6.2, 7.4, 3.6, 0.8, 8.9, 6.8],
    chartLegend: true,
    chartColors: [{ backgroundColor: '#006a4d' }],
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.comp.forEach((item) => {
      this.displayedColumns.push(item.year);
    });
    this.selectedLocation = 'option0';
    this.selectedDashView = 'option2';
    this.availableWidgets = this.config;
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }

  close(): void {
    this.dialogRef.close('The popup is closed');
  }

  downloadFile() {
    const canvas = <HTMLCanvasElement>document.querySelector('#barChart');
    const canvasImg = canvas.toDataURL('image/jpeg');
    const doc = new jsPDF('portrait');
    doc.setFontSize(30);
    doc.text(15, 15, 'Bar Chart');
    doc.addImage(canvasImg, 'JPEG', 10, 20, 185, 100);
    doc.save('canvas.pdf');
  }

}
