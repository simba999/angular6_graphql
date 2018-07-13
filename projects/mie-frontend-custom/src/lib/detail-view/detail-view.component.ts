import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mie-lib-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const detailTable = this.route.queryParams.subscribe(params => {
      console.log(params);
    });

  }

}
