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

  login(patientemail: string, patientpassword: string): void {
    this.Service.signInPatient(patientemail, patientpassword).subscribe(
      response => {
        localStorage.setItem('Email', patientemail);
        const token = response;
        console.log(token);
        
        const tokenString = JSON.stringify(token);
        localStorage.setItem('token', tokenString);
        this.router.navigateByUrl('bookingappoinment');
      },
      error => {
        alert("Incorrect Username/Password")
        console.log(error);
      }
    );
  }
}
