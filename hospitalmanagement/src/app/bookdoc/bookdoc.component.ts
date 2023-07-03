import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdoc',
  templateUrl: './bookdoc.component.html',
  styleUrls: ['./bookdoc.component.css']
})
export class BookdocComponent implements OnInit {


  displayedColumns: string[] = [
    'patient_id',
    'patient_name',
         'mobile',
         'gender',
         'admission_date',
        
      
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private s:DoctorService, private service:PatientsService,private router:Router){}

  ngOnInit(): void {
      this.getpatients();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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


  onLogOut(){
    this.router.navigateByUrl('frontpage');
  }
}
