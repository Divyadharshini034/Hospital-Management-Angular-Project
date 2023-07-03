import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatepatientsComponent } from '../createpatients/createpatients.component';
import { PatientsService } from '../services/patients.service';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { Doctors } from '../models/doctor';

@Component({
  selector: 'app-appoinmentbooking',
  templateUrl: './appoinmentbooking.component.html',
  styleUrls: ['./appoinmentbooking.component.css']
})
export class AppoinmentbookingComponent implements OnInit {

 doc:Doctors[]=[];
  constructor(private dialog:MatDialog,private route:Router, private s:PatientsService,private ser:DoctorService){}

  ngOnInit(): void {
     // this.getpat();
     this.getdoctors()
  }


  openAddEditEmpForm() {
    const dialogRef = this.dialog.open(CreatepatientsComponent);
   
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getpat();
        }
      },
    });
  }

  getpat()
  {
    this.s.getAllPatients().subscribe(r=>{
      console.log(r);
    })
  }

  getdoctors()
  {
    this.ser.getAllDoctors().subscribe(r=>{
      console.log(r);
      this.doc=r;
    })
  }
}
