import { Component, OnInit } from '@angular/core';
import { AdvisoryService } from '../../api/advisory.service';

@Component({
  selector: 'mie-advisory-page',
  templateUrl: './advisory-page.component.html',
  styleUrls: ['./advisory-page.component.scss']
})
export class AdvisoryPageComponent implements OnInit {
  chartvm;
  constructor(private advisoryService: AdvisoryService) { }

  ngOnInit() {
    this.chartvm = this.advisoryService.getDoughnutChartData();
  }

}
