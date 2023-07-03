import { Component, OnInit } from '@angular/core';
import { DoctorReg } from '../models/doctorreg';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-rgdoc',
  templateUrl: './rgdoc.component.html',
  styleUrls: ['./rgdoc.component.css']
})
export class RgdocComponent implements OnInit{

 drg:DoctorReg[]=[];

 constructor(private service:DoctorService){}
  ngOnInit(): void {
      this.getredoc()
  }

  getredoc()
  {
this.service.getdoctorregister().subscribe(r=>{
  console.log(r);
  this.drg=r;
})
  }

}
