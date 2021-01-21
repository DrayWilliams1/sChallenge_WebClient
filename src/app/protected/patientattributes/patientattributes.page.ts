import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patientattributes',
  templateUrl: './patientattributes.page.html',
  styleUrls: ['./patientattributes.page.scss'],
})
export class PatientattributesPage implements OnInit {
  private patients: any // all database patients

  constructor(
    private location: Location,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe((data) => {
      console.log(data)

      this.patients = data
    })
  }

  /**
   * Routes to previous page. If no history is found, will route to dashboard page (as default)
   */
  prevPage(): void {
    if (window.history.length > 1) {
      this.location.back()
    } else { // no history
      this.router.navigate(['/superdashboard'])
    }
  }

}
