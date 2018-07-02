import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// import library modules with in project
import { MieFrontendLibModule } from 'mie-frontend-lib';

// Material Modules
import {
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatRadioModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatTooltipModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatSelect
} from '@angular/material';


import { CdkTableModule } from '@angular/cdk/table';

// Third Party Modules
import { NgUploaderModule } from 'ngx-uploader';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// routing modules
import { AdvisoryRoutingModule } from './routing/advisory-routing.module';


// services

// components
import { AppComponent } from './app.component';
import { AdvisoryPageComponent } from './pages/advisory-page/advisory-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AdvisoryPageComponent,
    HeaderPageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatRadioModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    CdkTableModule,
    FlexLayoutModule,
    NgUploaderModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AdvisoryRoutingModule,
    MieFrontendLibModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
