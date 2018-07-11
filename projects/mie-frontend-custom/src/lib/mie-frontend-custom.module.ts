import { NgModule } from '@angular/core';
import { MieFrontendCustomComponent } from './mie-frontend-custom.component';
import { ModalComponent } from './modal/modal.component';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
  MatDialogModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarketShareTableComponent } from './market-share-table/market-share-table.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule
  ],
  declarations: [MieFrontendCustomComponent,
    ModalComponent,
    MarketShareTableComponent
  ],
  exports: [MieFrontendCustomComponent,
    ModalComponent,
    MarketShareTableComponent
  ],
  entryComponents: [ModalComponent]
})
export class MieFrontendCustomModule { }
