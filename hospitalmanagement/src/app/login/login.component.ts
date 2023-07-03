import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor (private authService: AuthService,private router:Router){}

  ngOnInit(): void {
      
  }

  login(adminName: string, adminPassword: string): void {
    this.authService.signIn(adminName, adminPassword).subscribe(
   response => {
         localStorage.setItem('username', adminName);
         const token = response; 
         console.log(token);
         const tokenString = JSON.stringify(token);
         localStorage.setItem('token', tokenString);
        this.router.navigateByUrl('dashboard');
    },
      error => {
        alert("Incorrect Username/Password")
        console.log(error);

      }
    );
  }
}
