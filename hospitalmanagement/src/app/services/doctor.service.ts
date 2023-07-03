import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { DoctorReg } from '../models/doctorreg';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DoctorService  {

  constructor(private httpclient:HttpClient) { }

  

  baseUrl="https://localhost:7180/api/Doctors";

  getAllDoctors():Observable<any>{
    return this.httpclient.get('https://localhost:7180/api/Doctors');
  }

  createDoctors(m:any):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, m);
  }

  updateDoctors(id:number,data:any):Observable<any>{
    return this.httpclient.put(`https://localhost:7180/api/Doctors/${id}`, data);
  }

  deleteDoctors(id:number):Observable<any>{
    return this.httpclient.delete(`https://localhost:7180/api/Doctors/${id}`);
  }


  private apiUrl = 'https://localhost:7180/api/DoctorRegistrations';

 

  signupDoctor(doctor:DoctorReg): Observable<any> {
    return this.httpclient.post<any>(this.apiUrl, doctor);

  }

  getdoctorregister():Observable<any>
  {
    return this.httpclient.get<any>(this.apiUrl);
  }

}
