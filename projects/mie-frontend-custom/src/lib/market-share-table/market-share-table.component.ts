import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ModalComponent } from './../modal/modal.component';
import * as jsPDF from 'jspdf';
// const jsPDF = require('jspdf');
// require('jspdf-autotable');

class PeriodicElement {
  name: string;
  position: number;
  value: string;
  year: string;
}
@Component({
  selector: 'mie-lib-market-share-table',
  templateUrl: './market-share-table.component.html',
  styleUrls: ['./market-share-table.component.scss']
})
export class MarketShareTableComponent implements OnInit {

  @ViewChild('tablePanel', { read: ElementRef }) public tablePanel: ElementRef<any>;
  @ViewChild('leftTablePanel') public leftTablePanel: ElementRef<any>;
  displayedFirstColumns = ['name'];
  public displayedColumns: any = [];

  public headContent = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  public dataContent = [
    ['20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%', '20.1%'],
    ['7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%', '7.4%'],
    ['6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%', '6.7%'],
    ['0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%', '0.8%'],
    ['3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%', '3.8%'],
    ['6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%', '6.2%']
  ];
  public header = ['Name'];
  public content = [['CBRE'], ['JLL'], ['BNP Paribas'], ['Colliers'], ['Cushman & Wakefield'], ['Eastdil Secured']];


  public ELEMENT_DATA: PeriodicElement[] = [
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

  dataSource = this.ELEMENT_DATA;


  constructor(public dialog: MatDialog) {
    this.ELEMENT_DATA.forEach((item) => {
      this.displayedColumns.push(item.year);
    });
  }

  ngOnInit() {
    console.log(JSON.stringify(this.ELEMENT_DATA));
  }

  public onPreviousSearchPosition(): void {
    this.tablePanel.nativeElement.scrollLeft -= 100;
  }

  public onNextSearchPosition(): void {
    this.tablePanel.nativeElement.scrollLeft += 100;
  }

  download() {
    const doc = new jsPDF('p', 'pt');
    const startingPage = doc.internal.getCurrentPageInfo().pageNumber;
    doc.autoTable(this.header, this.content, {
      columnStyles: {
        0: { columnWidth: 110 }
      },
      showHeader: 'firstPage',
      styles: { fontSize: 8 },
      avoidPageSplit: true,
      margin: { right: 315 }
    });
    doc.setPage(startingPage);
    doc.autoTable(this.headContent, this.dataContent, {
      columnStyles: {
        0: { columnWidth: 35 },
        1: { columnWidth: 35 },
        2: { columnWidth: 35 },
        3: { columnWidth: 35 },
        4: { columnWidth: 35 }
      },
      showHeader: 'firstPage',
      styles: { fontSize: 8 },
      margin: { left: 120 }
    });
    doc.save('test.pdf');
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1900px',
      data: 'passing string from table header'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog got closed');
    });

  }
}
