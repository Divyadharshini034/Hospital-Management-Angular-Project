import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patientsreg } from '../models/patentreg';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpclient:HttpClient) { }

  

  baseUrl="https://localhost:7180/api/Patients";

  getAllPatients():Observable<any>{
    return this.httpclient.get('https://localhost:7180/api/Patients');
  }

  createPatients(m:any):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, m);
  }

  updatePatients(id:number,data:any):Observable<any>{
    return this.httpclient.put(`https://localhost:7180/api/Patients/${id}`, data);
  }

  deletePatients(id:number):Observable<any>{
    return this.httpclient.delete(`https://localhost:7180/api/Patients/${id}`);
  }


  private apiUrl = 'https://localhost:7180/api/PatientRegistrations';

 

  signupPatient(patient:Patientsreg): Observable<any> {
    return this.httpclient.post<any>(this.apiUrl, patient);
  }

  rgpatient():Observable<any>{
    return this.httpclient.get<any>(this.apiUrl);
  }


  getpatdoctname(name:any):Observable<any>{
    return this.httpclient.get<any>(`https://localhost:7180/api/Patients/${name}`);
  }

}
