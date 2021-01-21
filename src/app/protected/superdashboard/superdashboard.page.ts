import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-superdashboard',
  templateUrl: './superdashboard.page.html',
  styleUrls: ['./superdashboard.page.scss'],
})
export class SuperdashboardPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * Performs a logout operation.
   */
  logout() {
    this.authService.logout()
  }

}
