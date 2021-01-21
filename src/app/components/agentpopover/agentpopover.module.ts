import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentpopoverPageRoutingModule } from './agentpopover-routing.module';

import { AgentpopoverPage } from './agentpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentpopoverPageRoutingModule
  ],
  declarations: [AgentpopoverPage]
})
export class AgentpopoverPageModule {}
