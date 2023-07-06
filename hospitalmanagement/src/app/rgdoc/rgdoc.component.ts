import { Component, OnInit } from '@angular/core';
import { DoctorReg } from '../models/doctorreg';
import { DoctorService } from '../services/doctor.service';
import { Doctors } from '../models/doctor';

@Component({
  selector: 'app-rgdoc',
  templateUrl: './rgdoc.component.html',
  styleUrls: ['./rgdoc.component.css']
})
export class RgdocComponent implements OnInit{

 drg:DoctorReg[]=[];
 doctor:Doctors[]=[];
 constructor(private service:DoctorService){}
  ngOnInit(): void {
      this.getredoc()
  }

  getredoc()
  {
  this.service.getdoctorregister().subscribe(r=>{
  console.log(r);
  this.doctor=r;
})
  }

}
