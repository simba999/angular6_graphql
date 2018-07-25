import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdvisoryService } from '../../api/advisory.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ModalComponent } from 'projects/mie-frontend-custom/src/lib/modal/modal.component';
import * as jsPDF from 'jspdf';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { User, Query } from '../../api/types';
import {
  getUsersQuery,
  createUserMutation
} from '../../api/querys';

@Component({
  selector: 'mie-advisory-page',
  templateUrl: './advisory-page.component.html',
  styleUrls: ['./advisory-page.component.scss']
})

export class AdvisoryPageComponent {

  users: Observable<User[]>;
  @ViewChild('content') content: ElementRef;
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
    chartOptions: {
      scaleShowVerticalLines: false,
      scaleShowValues: true,
      responsive: true,
      showScale: false,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
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

  constructor(public dialog: MatDialog, private apollo: Apollo) {
  }

  openPopup(type): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '2500px',
      data: type
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog got closed');
    });
  }

  downloadChart() {
    console.log('this is pdf');
    console.log('this is pdffffffff');
    const canvas = <HTMLCanvasElement>document.querySelector('#barChart');
    const canvasImg = canvas.toDataURL('image/jpeg');
    const doc = new jsPDF('portrait');
    doc.setFontSize(30);
    doc.text(15, 15, 'Bar Chart');
    doc.addImage(canvasImg, 'JPEG', 10, 20, 185, 100);
    doc.save('canvas.pdf');
  }

  // for query
  getUsers() {
    console.log('get getUsersrs')

    this.users = this.apollo.watchQuery<Query>(getUsersQuery)
      .valueChanges
      .pipe(
        map(result => {
          console.log('return value:', result)
          return result.data.allUsers
        })
      );
  }

  // for mutation
  createUser() {
    const createMutation = createUserMutation('+79062866099');
    this.apollo.mutate(createMutation).subscribe();
  }
}
