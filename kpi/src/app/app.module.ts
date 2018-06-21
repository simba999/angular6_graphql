import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

import { AppComponent } from './app.component';
import { AdvisoryComponent } from './pages/advisory/advisory.component';
import { ExecDashboardComponent } from './pages/exec-dashboard/exec-dashboard.component';
import { ExecDashboardGlobalComponent } from './pages/exec-dashboard-global/exec-dashboard-global.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { ClientSatisfactionComponent } from './pages/client-satisfaction/client-satisfaction.component';
import { EmployeeEngagementComponent } from './pages/employee-engagement/employee-engagement.component';
import { CorpResponsibilityComponent } from './pages/corp-responsibility/corp-responsibility.component';
import { GwsComponent } from './pages/gws/gws.component';
import { AssetServicesComponent } from './pages/asset-services/asset-services.component';
import { DigitalAdoptionComponent } from './pages/digital-adoption/digital-adoption.component';
import { CostManagementComponent } from './pages/cost-management/cost-management.component';
import { FinancialResultsComponent } from './pages/financial-results/financial-results.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestDashComponent } from './test-dash/test-dash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { SafePipe } from './pipes/safe.pipe';
import { ChartComponent } from './components/chart/chart.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme)

@NgModule({
  declarations: [
    AppComponent,
    AdvisoryComponent,
    ExecDashboardComponent,
    ExecDashboardGlobalComponent,
    HomeComponent,
    ContentsComponent,
    ClientSatisfactionComponent,
    EmployeeEngagementComponent,
    CorpResponsibilityComponent,
    GwsComponent,
    AssetServicesComponent,
    DigitalAdoptionComponent,
    CostManagementComponent,
    FinancialResultsComponent,
    HeaderComponent,
    NavbarComponent,
    jqxChartComponent,
    TestDashComponent,
    CardComponent,
    SafePipe,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
