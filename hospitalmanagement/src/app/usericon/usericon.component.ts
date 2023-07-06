import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Patientsreg } from '../models/patentreg';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-usericon',
  templateUrl: './usericon.component.html',
  styleUrls: ['./usericon.component.css']
})
export class UsericonComponent implements OnInit  {

rp:Patientsreg[]=[];
 constructor(private service:AuthService,private route:Router){}

  ngOnInit(): void {
     
  }


  getuserpatient(patientusername:string,patientpassword:string)
  {

    this.service.signInPatient(patientusername,patientpassword).subscribe(r=>{
      console.log(r);
      
    })
  }
}
