import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

/**
 * -- File Description --
 * 
 * The login page allows the user to provide their credentials and login to the Telehealth application.
 * It performs a call to the accompanying Web Api (must be running for this to work).
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_error_message: string = ''

  // The structure of the form to be laid out on in the view
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [true, []] // by default, user is set to be remembered
  });

   // The error messages to be displayed in the case of an incorrectly validated form
   public errorMessages = {
    username: [
      { type: 'required', message: 'Username is required'},
    ],
    password: [
      { type: 'required', message: 'Password is required'}
    ]
  }

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {}

  /**
   * An Ionic lifecycle hook which activates any time the view is left, clearing data present on the login form
   */
  ionViewWillLeave(): void {
    this.loginForm.reset() // clears the login form when the component is activated/reactivated (possibly after logout)

    this.loginForm.setValue({ // resets the form with the necessary inputs
      username: '',
      password: '',
      rememberMe: true
    })
  }

  /**
   * Returns the user-inputted username from the login form
   * 
   * @returns the form's username field
   */
  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  /**
   * Returns the user-inputted password from the login form
   * 
   * @returns the form's password field
   */
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  /**
   * Performs login using data provided from form. Gets in contact with the authentication service.
   * After sucessful login, the page navigation is handled by the routing within the app.component.ts.
   * By default, authenticated users will be redirected to the dashboard
   */
  login(): void {
    this.authService.login(this.username.value, this.password.value)
  }
}
