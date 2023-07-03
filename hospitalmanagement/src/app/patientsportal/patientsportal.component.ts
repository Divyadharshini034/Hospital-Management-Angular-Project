import { Component, OnInit } from '@angular/core';
import { Doctors } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-patientsportal',
  templateUrl: './patientsportal.component.html',
  styleUrls: ['./patientsportal.component.css']
})
export class PatientsportalComponent implements OnInit {


  depart:Doctors[]=[];
  constructor(private service:DoctorService){}
  ngOnInit(): void {
      this.getdepartment();
  }
 getdepartment(){
  this.service.getAllDoctors().subscribe(r=>{
    console.log(r);
    this.depart=r;
  })
 }

}
