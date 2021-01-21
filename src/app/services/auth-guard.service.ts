import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/**
 * -- File Description --
 * 
 * This file holds any logic neccessary for guarding protected pages.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService) { }

  /**
   * Verifies whether the current user can activate the route this guard covers.
   * The auth guard ensures the user cannot access protected pages
   * 
   * @returns true/false whether the user can access this route
   */
  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
