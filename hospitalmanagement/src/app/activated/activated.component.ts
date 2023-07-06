import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctors } from '../models/doctor';
import { DoctorReg } from '../models/doctorreg';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.css']
})
export class ActivatedComponent {


  doctor:Doctors[]=[];

  constructor(private httpclient:HttpClient,private dialog:MatDialog,private s:DoctorService, private service:PatientsService,private router:Router){}

  ngOnInit(): void {
      this.getdoctoractive()
  }

  getdoctoractive()
  {
    this.s.getactivatedoctors().subscribe(r=>{
      console.log(r);
      this.doctor=r;
    })
  }
  onLogOut(){
    this.router.navigateByUrl('frontpage');
  }
}
