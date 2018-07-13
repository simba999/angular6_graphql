import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvisoryPageComponent } from '../pages/advisory-page/advisory-page.component';
import { DetailViewComponent } from 'projects/mie-frontend-custom/src/lib/detail-view/detail-view.component';
import { AdvisoryCardsComponent } from 'projects/mie-frontend-custom/src/lib/advisory-cards/advisory-cards.component';

const advisoryRoutes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: AdvisoryPageComponent },
      { path: 'cards', component: AdvisoryCardsComponent },
      { path: 'details', component: DetailViewComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(advisoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdvisoryRoutingModule { }
