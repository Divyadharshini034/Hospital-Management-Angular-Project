import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientsService } from '../services/patients.service';
import { CoreService } from '../services/core.service';
import { CreatepatientsComponent } from '../createpatients/createpatients.component';
import { UpdatepatientsComponent } from '../updatepatients/updatepatients.component';
import { Doctors } from '../models/doctor';
import { Patients } from '../models/patient';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  
  displayedColumns: string[] = [
         'patient_id',
          'patient_name',
         'mobile',
         'doctor_name',
         'gender',
         'admission_date',
          'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private s:DoctorService, private service:PatientsService,private coreserv:CoreService){}
  
  ngOnInit(): void {
      this.getpatients()
  }

  openAddEditEmpForm() {
    const dialogRef = this.dialog.open(CreatepatientsComponent);
   
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getpatients();
        }
      },
    });
  }

  getpatients() {
    this.service.getAllPatients().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this.service.deletePatients(id).subscribe({
      next: (res) => {
        this.coreserv.openSnackBar('Patients deleted!', 'done');
        this.getpatients();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(UpdatepatientsComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getpatients();
        }
      },
    });
  }
}
