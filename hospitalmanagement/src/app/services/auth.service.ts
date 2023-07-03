import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(adminName: string, adminPassword: string) {
    const signInData = { adminName, adminPassword };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>('https://localhost:7180/api/Token/Admin', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }
 
  signInDoctor(doctoremail: string, doctorpassword: string) {
    const signInData = { doctoremail, doctorpassword };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>('https://localhost:7180/api/Token/Doctor', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('doctoremail', doctoremail);
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }



  signInPatient(patientemail: string, patientpassword: string) {
    const signInData = { patientemail, patientpassword };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>('https://localhost:7180/api/Token/Patient', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('patientemail', patientemail);
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }


  getToken()
  {
    return localStorage.getItem('jwtToken');
  }
}
