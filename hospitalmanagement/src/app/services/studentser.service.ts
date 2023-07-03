import { Injectable, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Studentsreg } from '../models/studentsmodel';


@Injectable({
  providedIn: 'root'
})
export class StudentserService  {

  registerURL="https://localhost:7104/api/StudentRegisters";
  loginURL="https://localhost:7104/api/Token/User";

  constructor(private httpclient:HttpClient) { }

  userLogin(email: string, password: string): Observable<any> {
    const userData = {
      email: email,
      password: password
    };
    const headeroptions={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      responseType:'text' as 'json'
    }

    return this.httpclient.post<string>(`${this.loginURL}`, userData,headeroptions)
      .pipe(tap(r=>{
        localStorage.setItem('token',r);
      }));
  }

  registerUser(register:Studentsreg):Observable<Object>{
    return this.httpclient.post(`${this.registerURL}`, register);
  }


  
}
