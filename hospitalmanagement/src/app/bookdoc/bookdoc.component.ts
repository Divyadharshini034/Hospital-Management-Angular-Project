import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Doctors } from '../models/doctor';

@Component({
  selector: 'app-bookdoc',
  templateUrl: './bookdoc.component.html',
  styleUrls: ['./bookdoc.component.css']
})
export class BookdocComponent implements OnInit {


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
