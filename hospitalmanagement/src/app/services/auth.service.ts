import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { DoctorService } from './doctor.service';

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
 
  signInDoctor(email: string, password: string) {
    const signInData = { email, password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };
    
    return this.http.post<string>('https://localhost:7180/api/Token/Doctor', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('email', email);
          localStorage.setItem('jwtToken', jwtToken);
        
        })
      );
  }


 

  signInPatient(patientusername: string, patientpassword: string) {
    const signInData = { patientusername, patientpassword };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>('https://localhost:7180/api/Token/Patient', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('patientusername', patientusername);
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }




  getToken()
  {
    return localStorage.getItem('jwtToken');
  }
}
