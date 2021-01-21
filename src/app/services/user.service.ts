import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const USER_URL = 'https://localhost:44322/api/Users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtains a user by their id
   * 
   * @param userId the id of the user to retrieve
   */
  getUserById(userId: number): Observable<object> {
    let url: string = USER_URL + '/' + userId

    return this.http.get(url)
  }

  /**
    * Obtains whether the user is a supervisor
    * 
    * @param userId the id of the user to check
    * 
    * @returns an Observable containing whether the user is a supervisor
    */
  userIsSupervisor(userId: number): Observable<any> {
    let userIdJson: any = {id: userId} // a json containing the user's id, to be sent to the web api
    let url: string = USER_URL + '/isSuper'

    return this.http.post<any>(
      url,
      JSON.stringify(userIdJson),
      {
        headers: new HttpHeaders()
          .set('Content-Type','application/json')
      })
  }
}
