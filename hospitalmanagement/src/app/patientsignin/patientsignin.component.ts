import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientsignin',
  templateUrl: './patientsignin.component.html',
  styleUrls: ['./patientsignin.component.css']
})
export class PatientsigninComponent {

 
  constructor(private Service: AuthService, private router: Router) { }

  login(patientusername: string, patientpassword: string): void {
    this.Service.signInPatient(patientusername, patientpassword).subscribe(
      response => {
        localStorage.setItem('UserName', patientusername);
       const p=localStorage.getItem('UserName');
        const token = response;
     
        console.log(token);
        
        const tokenString = JSON.stringify(token);
        localStorage.setItem('token', tokenString);
        this.router.navigate(['bookingappoinment'],{ queryParams: { alert: p }});
      },
      error => {
        alert("Incorrect Username/Password")
        console.log(error);
      }
    );
  }
}
