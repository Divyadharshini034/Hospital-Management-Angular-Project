import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctors } from '../models/doctor';
import { Patients } from '../models/patient';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-seedoctors',
  templateUrl: './seedoctors.component.html',
  styleUrls: ['./seedoctors.component.css']
})
export class SeedoctorsComponent implements OnInit {

  doc:Doctors[]=[];
  pat:Patients[]=[];
  constructor(private service:DoctorService,private ser:PatientsService){}

  ngOnInit(): void {
      this.getdoctors()
  }

  getdoctors()
  {
    this.service.getAllDoctors().subscribe(r=>{
      
      console.log(r);
      this.doc=r;
     
      })
   
  }

}
