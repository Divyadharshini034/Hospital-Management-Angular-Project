import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doctorsignin',
  templateUrl: './doctorsignin.component.html',
  styleUrls: ['./doctorsignin.component.css']
})
export class DoctorsigninComponent {


  constructor(private Service: AuthService, private router: Router) { }

  login(doctoremail: string, doctorpassword: string): void {
    this.Service.signInDoctor(doctoremail, doctorpassword).subscribe(
      response => {
        localStorage.setItem('Email', doctoremail);
        const token = response;
        console.log(token);
        
        const tokenString = JSON.stringify(token);
        localStorage.setItem('token', tokenString);
        this.router.navigateByUrl('bookdoc');
      },
      error => {
        alert("Incorrect Username/Password")
        console.log(error);
      }
    );
  }

}
