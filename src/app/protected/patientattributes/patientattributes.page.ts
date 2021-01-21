import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from 'src/app/services/patient.service';

/**
 * -- File Description -- 
 * 
 * Facilitates the filtering of patients based on various attributes
 */
@Component({
  selector: 'app-patientattributes',
  templateUrl: './patientattributes.page.html',
  styleUrls: ['./patientattributes.page.scss'],
})
export class PatientattributesPage implements OnInit {
  private patients: any = []              // all database patients
  public filteredPatients: any = []       // a subset of filtered patients based on the original data
  private filterTerm: string              // the criteria to filter the results
  private filterValue: string             // the value to filter the reults
  public covidSelector: boolean = false;  // a flag indicating which search field to use

  constructor(
    private location: Location,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe((data) => { // obtains all patients from the database
      console.log(data)

      this.patients = data
      this.filteredPatients = data
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

  /**
   * Updates the filter criteria based on the filter select field.
   * Sets covid flag based on the filter criteria.
   * 
   * @param $event the event trigerring this function
   */
  getFilterTerm($event): void {
    let term: string = $event.target.value

    if(term == 'hasCovid') { // updates the covid selector flag to change the search input to a true/false selector
      this.covidSelector = true
    } else {
      this.covidSelector = false
    }

    this.filterTerm = term
  }

  /**
   * Updates the filter value based on the search bar input
   * 
   * @param $event the event trigerring this function
   */
  getFilterValue($event): void {
    this.filterValue = $event.target.value;
  }

  /**
   * Filters the list of patient data based on search criteria and value
   */
  filterPatientData(): void {
    if (this.filterTerm == null || this.filterValue == null) { // if either of the search fields are empty, return the full list of patients
      this.filteredPatients = this.patients
    } else {
      this.filteredPatients = this.patients.filter((patient) => { // filters based on different data properties based on the selected filter criteria
        if(this.filterTerm == 'firstName') {
          return (
            patient.firstName.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1
          )
        } else if (this.filterTerm == 'postalCode') {
          return (
            patient.postal_Code.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1
          )
        } else if (this.filterTerm == 'hasCovid') {
          return (
            String(patient.hasCovid).indexOf(this.filterValue) > -1
          )
        }
      })
    }
  }
}
