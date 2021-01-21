import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patientdates',
  templateUrl: './patientdates.page.html',
  styleUrls: ['./patientdates.page.scss'],
})
export class PatientdatesPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
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
