import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperdashboardPage } from './superdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SuperdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperdashboardPageRoutingModule {}
