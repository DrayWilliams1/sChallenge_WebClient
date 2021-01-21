import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentpopoverPage } from './agentpopover.page';

const routes: Routes = [
  {
    path: '',
    component: AgentpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentpopoverPageRoutingModule {}
