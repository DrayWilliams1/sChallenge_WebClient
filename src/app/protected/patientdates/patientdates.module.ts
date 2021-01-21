import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientdatesPageRoutingModule } from './patientdates-routing.module';

import { PatientdatesPage } from './patientdates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientdatesPageRoutingModule
  ],
  declarations: [PatientdatesPage]
})
export class PatientdatesPageModule {}
