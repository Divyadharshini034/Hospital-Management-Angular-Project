import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { PatientsService } from '../services/patients.service';
import { Doctors } from '../models/doctor';
import { Patients } from '../models/patient';

@Component({
  selector: 'app-doctorappointment',
  templateUrl: './doctorappointment.component.html',
  styleUrls: ['./doctorappointment.component.css']
})
export class DoctorappointmentComponent implements OnInit{

  doc:Doctors[]=[];
  pat:Patients[]=[];
  constructor(private service:DoctorService,private ser:PatientsService){}
ngOnInit(): void {
    this.getpatient();
}

getpadoctors(na:string)
{
  this.ser.getpatdoctname(na).subscribe(r=>{
    console.log(r);
  })
}

getpatient(){
  this.ser.getAllPatients().subscribe(r=>{
    console.log(r);
    this.pat=r;
  })
}

}
