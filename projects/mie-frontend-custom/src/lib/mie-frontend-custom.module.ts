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
import { DetailViewComponent } from './detail-view/detail-view.component';
import { AdvisoryCardsComponent } from './advisory-cards/advisory-cards.component';
import { MieFrontendLibModule } from 'projects/mie-frontend-lib/src/lib/mie-frontend-lib.module';
// import { BarChartComponent } from 'projects/mie-frontend-lib/src/lib/bar-chart/bar-chart.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MieFrontendLibModule
  ],
  declarations: [MieFrontendCustomComponent,
    ModalComponent,
    MarketShareTableComponent,
    DetailViewComponent,
    AdvisoryCardsComponent,
    // BarChartComponent
  ],
  exports: [MieFrontendCustomComponent,
    ModalComponent,
    MarketShareTableComponent,
    DetailViewComponent,
    AdvisoryCardsComponent,
    // BarChartComponent
  ],
  entryComponents: [ModalComponent]
})
export class MieFrontendCustomModule { }
