import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Patientsreg } from '../models/patentreg';

@Component({
  selector: 'app-rgpat',
  templateUrl: './rgpat.component.html',
  styleUrls: ['./rgpat.component.css']
})
export class RgpatComponent implements OnInit{

 rp:Patientsreg[]=[];
  constructor(private s:PatientsService){}
  ngOnInit(): void {
      this.getpatient();
  }

  getpatient(){
    this.s.rgpatient().subscribe(r=>{
      console.log(r);
      this.rp=r;
    })
  }

}
