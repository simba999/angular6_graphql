import { Component, OnInit, Input } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  isChart: boolean;

  constructor() { }

  ngOnInit() {
    switch(this.card.title) {
      case 'Position': this.isChart = true;
        break;
      default: this.isChart = false;
        break;
    }
  }

}
