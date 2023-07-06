import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatepatientsComponent } from '../createpatients/createpatients.component';
import { PatientsService } from '../services/patients.service';
import { DoctorService } from '../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from '../models/doctor';
import { UsericonComponent } from '../usericon/usericon.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appoinmentbooking',
  templateUrl: './appoinmentbooking.component.html',
  styleUrls: ['./appoinmentbooking.component.css']
})
export class AppoinmentbookingComponent implements OnInit {

 doc:Doctors[]=[]; alertMessage: string='';
  constructor(private routes: ActivatedRoute,private dialog:MatDialog,private serv:AuthService, private route:Router, private s:PatientsService,private ser:DoctorService){}

  ngOnInit(): void {
 
     // this.getpat();
     this.getdoctors()
    
  }

  showalert()
  {
    this.routes.queryParams.subscribe(params => {
      this.alertMessage = params['alert'];
     // this.route.navigate(['activate'], { queryParams: { alert: this.alertMessage } });
      // Perform any additional logic or actions with the alert message
    });
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
    this.ser.getactivatedoctors().subscribe(r=>{
      console.log(r);
      this.doc=r;
    })
  }

  
  openEditForm(data: any) {
    const dialogRef = this.dialog.open(UsericonComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
         
        }
      },
    });
  }
}
