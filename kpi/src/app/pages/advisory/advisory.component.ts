import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {

  cards = [
    { title: 'Position', cols: 1, rows: 1 },
    { title: 'Position - Over Time', cols: 1, rows: 1 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
