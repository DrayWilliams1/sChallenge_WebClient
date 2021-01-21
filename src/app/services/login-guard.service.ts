import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/**
 * -- File Description --
 * 
 * This file holds any logic neccessary for guarding the login page. Typical
 * functionality restricts users from re-accessing the login page after they have 
 * successfully logged in. A user 'should' have no reason to visit login if they have
 * already authenticated.
 */
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private authService: AuthenticationService) { }

  /**
   * Verifies whether the current user can activate the route this guard covers.
   * The login guard ensures the user cannot return to the login page after they
   * 
   * @returns true/false whether the user can access this route
   */
  canActivate(): boolean {
    return !this.authService.isAuthenticated();
  }
}
