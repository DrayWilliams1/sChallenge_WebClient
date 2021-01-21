import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patientdates',
  templateUrl: './patientdates.page.html',
  styleUrls: ['./patientdates.page.scss'],
})
export class PatientdatesPage implements OnInit {

  private patients: any = []              // all database patients
  public filteredPatients: any = []      // a subset of filtered patients based on the original data
  private filterTerm: string              // the criteria to filter the results
  private filterValue: string             // the value to filter the reults

  constructor(
    private location: Location,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit() {
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
   * Updates the filter criteria based on the filter select field
   * 
   * @param $event the event trigerring this function
   */
  getFilterTerm($event): void {
    console.log($event.target.value)
    let term: string = $event.target.value

    this.filterTerm = term
  }

  /**
   * Updates the filter value based on the search bar input
   * 
   * @param $event the event trigerring this function
   */
  getFilterValue($event): void {
    let date: Date = new Date($event.target.value)
    let formatDate: string = date.getFullYear() + '-' + this.addZeroes(date.getMonth()+1) + '-' + this.addZeroes(date.getDate())
    console.log(formatDate)
    this.filterValue = formatDate
  }

  /**
   * Adds zeroes to single digit dates. Useful for when the returned day of the month
   * or month of the year is less then 10. Eg. 09/06/2020
   * 
   * @param num the number to be altered (if a single digit)
   * 
   * @returns the (possible) altered number
   */
  addZeroes(num: number): string {
    return num < 10? '0'+ num : '' + num;
  }

  filterPatientData(): void {
    console.log(this.filterValue)
    if (this.filterTerm == null || this.filterValue == null) {
      this.filteredPatients = this.patients
    } else {
      this.filteredPatients = this.patients.filter((patient) => { // filters based on different data properties based on the selected filter criteria
        if(this.filterTerm == 'birthDate') {
          
          return (
            patient.birthDate.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1
          )
        } else if (this.filterTerm == 'call_Date') {
          return (
            patient.call_Date.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1
          )
        }
      })
    }
  }

}
