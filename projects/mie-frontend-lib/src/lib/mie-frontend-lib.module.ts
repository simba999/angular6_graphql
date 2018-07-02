// angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// third party modules
import { ChartsModule } from 'ng2-charts';

// components
import { MieFrontendLibComponent } from './mie-frontend-lib.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [
    MieFrontendLibComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  exports: [
    MieFrontendLibComponent,
    DoughnutChartComponent,
    LineChartComponent,
    BarChartComponent]
})
export class MieFrontendLibModule { }
