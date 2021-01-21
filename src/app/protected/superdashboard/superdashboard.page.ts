import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AgentpopoverPage } from 'src/app/components/agentpopover/agentpopover.page';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';

/**
 * -- File Description -- 
 * 
 * Provides controller operations for the supervisor dashboard
 */
@Component({
  selector: 'app-superdashboard',
  templateUrl: './superdashboard.page.html',
  styleUrls: ['./superdashboard.page.scss'],
})
export class SuperdashboardPage implements OnInit {

  private userId: number    // the current user's id
  private user: any         // the current user (database object)
  private patientCount: any // the number of patients in the system

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private popCtrl: PopoverController,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {}

  ionViewDidEnter(): void {
    this.authService.getUserID().then((uid: number) => {
      this.userId = uid

      this.isSupervisor()
      this.getUser()
    })

    this.patientService.getPatientCount().subscribe((count) => {
      this.patientCount = count
    })
  }

  /**
   * Gets the user object
   */
  getUser(): void {
    this.userService.getUserById(this.userId).subscribe((u: any) => {
      this.user = u
    })
  }

  /**
   * Retrieves the user object representing the currently signed in user
   */
  isSupervisor(): void {
    this.userService.userIsSupervisor(this.userId).subscribe((data: boolean) => {
      let isSuper: boolean = data

      if(!isSuper) { // the user is not a super, display a modal that asks them to sign out (the application is meant for supervisors)
        this.popCtrl.create({
          component: AgentpopoverPage,
          backdropDismiss: false // clicking backdrop will not dismiss card
        }).then((popover) => {
          popover.present() // shows the popover
        })
      }
    })
  }

  /**
   * Routes to a page for filtering patients by a date
   */
  viewPatientDate(): void {
    this.router.navigate(['patientdates'])
  }

  /**
   * Routes to a page for filtering patients by specific properties
   */
  viewPatientAttr(): void {
    this.router.navigate(['patientattributes'])
  }

  /**
   * Performs a logout operation.
   */
  logout(): void {
    this.authService.logout()
  }
}
