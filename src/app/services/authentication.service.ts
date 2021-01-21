import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const USER_ID = 'userId'

const POST_LOGIN_URL = 'https://localhost:44322/api/Users/login'

/**
 * -- File Description --
 * 
 * This file contains all operations surrounding authentication and interaction with the 
 * Web Api.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false); // user is not authenticated upon initialization

  constructor(
    private storage: Storage, 
    private plt: Platform,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private http: HttpClient
  ) {
    this.plt.ready().then(() => { // when platform is ready, the token is checked (for authentication) 
      this.checkToken()
    })
  }

  /**
   * Performs the login operation for a user
   * 
   * @param username the user's username
   * @param password the user's password
   */
  login(username: string, password: string) {
    let loginJson: any = { // the login JSON object to be sent to the web API
      username: username,
      password: password
    }

    this.loadCtrl.create({ // presents a loading spinner as the operation is underway
      message: "Logging in...",
      spinner: "crescent"
    }).then((loading) => {
      loading.present();

      this.http.post<any>( // makes POST request to web api
        POST_LOGIN_URL,
        JSON.stringify(loginJson),
        {
          headers: new HttpHeaders()
            .set('Content-Type','application/json')
        }
      ).subscribe((data) => {
        this.loadCtrl.dismiss(); // dismisses loading spinner
        console.log(data)

        let userId: number
        let success: boolean = data['success'] // retrieves the success field from the returned JSON

        if(success) { // if successful, the userId will be included
          userId = data['userId']

          this.storage.set(USER_ID, userId).then(() => { // stores the user ID in storage for later API calls
            this.authenticationState.next(true)
          })
        } else { // login credentials incorrect, displays a toasty with error info
          this.toastCtrl.create({
            message: 'Invalid username and/or password.',
            duration: 5*1000, // display toast for 5 seconds
            color: "warning"
          }).then((toasty) => {
            toasty.present();
          })
        }
      })
    })
  }

  /**
   * Checks the current authentication state of the user
   * 
   * @returns true/false whether the user is currently logged in
   */
  isAuthenticated(): boolean {
    return this.authenticationState.value
  }

  /**
   * Performs a local storage check for existence of ta login token.
   * In this case the token is being substituted for a user ID (for example's sake)
   * 
   * @returns a Promise after the token check has processed
   */
  async checkToken(): Promise<void> {
    return this.storage.get(USER_ID).then(res => {
      if(res) { // if a user Id exists, assume the user is authenticated (would typically use a session_id/jwt)
        this.authenticationState.next(true);
      }
    })
  }

  /**
   * Returns the User's TimeControl ID from local storage
   * 
   * @returns a Promise containing the user id
   */
  getUserID(): Promise<number> {
    return this.storage.get(USER_ID)
  }

  /**
   * Performs a logout operation for the user. The userId is also removed from storage
   * 
   * @returns a Promise after the logout operation has completed
   */
  async logout(): Promise<void> {
    return this.storage.remove(USER_ID).then(() => {
      this.authenticationState.next(false);
    })
  }
}
