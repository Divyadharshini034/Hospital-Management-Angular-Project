import { Component, OnInit, ViewChild } from '@angular/core';

import { DoctorService } from '../services/doctor.service';
import { CoreService } from '../services/core.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdatedoctorComponent } from '../updatedoctor/updatedoctor.component';
import { Doctors } from '../models/doctor';
import { CreatedoctorComponent } from '../createdoctor/createdoctor.component';
import { DoctorReg } from '../models/doctorreg';
import { ActivatedoctorService } from '../services/activatedoctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  
 doctorId:any;
 

  displayedColumns: string[] = [
    'id','name', 'mobile', 'email','qualification',  'gender','department','birthdate','isActivated','action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private service:DoctorService,private coreserv:CoreService,private active:ActivatedoctorService){}
  
  ngOnInit(): void {
      this.getdoctors()
      
  }

  openAddEditEmpForm() {
    const dialogRef = this.dialog.open(CreatedoctorComponent);
   
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getdoctors();
          this.getregdoctor();
        }
      },
    });
  }

  getdoctors() {
    this.service.getAllDoctors().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  getregdoctor(){
    this.service.getdoctorregister().subscribe(r=>{
      console.log(r);
      
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this.service.deleteDoctors(id).subscribe({
      next: (res) => {
        this.coreserv.openSnackBar('Doctor deleted!', 'done');
        this.getdoctors();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(UpdatedoctorComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getdoctors();
        }
      },
    });
  }




}
