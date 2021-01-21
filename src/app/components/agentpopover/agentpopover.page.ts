import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-agentpopover',
  templateUrl: './agentpopover.page.html',
  styleUrls: ['./agentpopover.page.scss'],
})
export class AgentpopoverPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private popCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  /**
   * Performs a logout operation. Closes the popover
   */
  logout() {
    this.popCtrl.dismiss();
    this.authService.logout()
  }
}
