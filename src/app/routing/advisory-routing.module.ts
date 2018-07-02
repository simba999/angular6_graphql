import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvisoryPageComponent } from '../pages/advisory-page/advisory-page.component';

const advisoryRoutes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: AdvisoryPageComponent },
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
