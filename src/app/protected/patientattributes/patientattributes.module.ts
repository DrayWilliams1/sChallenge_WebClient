import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientattributesPageRoutingModule } from './patientattributes-routing.module';

import { PatientattributesPage } from './patientattributes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientattributesPageRoutingModule
  ],
  declarations: [PatientattributesPage]
})
export class PatientattributesPageModule {}
