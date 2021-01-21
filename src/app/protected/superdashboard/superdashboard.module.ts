import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperdashboardPageRoutingModule } from './superdashboard-routing.module';

import { SuperdashboardPage } from './superdashboard.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperdashboardPageRoutingModule
  ],
  declarations: [SuperdashboardPage, FooterComponent]
})
export class SuperdashboardPageModule {}
