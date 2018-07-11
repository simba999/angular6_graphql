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
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  close(): void {
    this.dialogRef.close('The popup is closed');
  }

}
