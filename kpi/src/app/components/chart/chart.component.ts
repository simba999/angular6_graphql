import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() isChart: boolean;
  @ViewChild('canvas') canvas: ElementRef;
  myChart: any;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.isChart) {
      this.myChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
        type: 'horizontalBar',
        data: {
          labels: ["CBRE", "Cushan & Wakefield", "JLL", "Eastdil Secured", "NKE Capital Market", "Marcus & Millichap", "HFF", "Calliers International", "Other"],
          datasets: [{
            label: '# of Votes',
            data: [18.1, 18, 10.2, 9.6, 9.6, 9.6, 9.6, 9.6, 9.6],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            // borderColor: [
            //     'rgba(255,99,132,1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
          }]
        },
        options: {
          // scales: {
          //     yAxes: [{
          //         ticks: {
          //             beginAtZero: true
          //         }
          //     }]
          // }
        }
      });
    } else {
      this.myChart = "Empty";
    }
  }

}
