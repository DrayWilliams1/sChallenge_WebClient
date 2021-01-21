import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const PATIENTS_URL = 'https://localhost:44322/api/Patients'

/**
 * -- File Description -- 
 * 
 * Allows for the retrieval patient data from the database
 */
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  /**
   * Obtains all patients from the database
   * 
   * @returns an Observable containing patients (non-paginated)
   */
  getAllPatients(): Observable<object> {
    return this.http.get(PATIENTS_URL)
  }

  /**
   * Obtains the number of patients in the database
   * 
   * @returns an Observable containing the count
   */
  getPatientCount(): Observable<object> {
    let url: string = PATIENTS_URL + '/count'
    return this.http.get(url)
  }
}
