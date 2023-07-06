import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdatepatientsComponent } from '../updatepatients/updatepatients.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientsService } from '../services/patients.service';
import { CoreService } from '../services/core.service';
import { DoctorService } from '../services/doctor.service';
import { Doctors } from '../models/doctor';


@Component({
  selector: 'app-createpatients',
  templateUrl: './createpatients.component.html',
  styleUrls: ['./createpatients.component.css']
})
export class CreatepatientsComponent {

  patientsForm: FormGroup;

  allDoctors :Doctors[]=[];
  constructor(private fb: FormBuilder,
   private s:DoctorService,
    private dialogRef: MatDialogRef<UpdatepatientsComponent>,
   private service:PatientsService, private coreService:CoreService, @Inject(MAT_DIALOG_DATA) public data: any){
  
      this.patientsForm = this.fb.group({
         patient_name : '',
         mobile : '',
         doctor_name : '',
         gender : '',
         admission_date : '',
          prescription  : '',
      });
    }
    ngOnInit(): void {
      this.patientsForm.patchValue(this.data);
      this.getalldoctors();
    }
  

    onFormSubmit() {
      this.service.createPatients(this.patientsForm.value).subscribe({
        next: (val: any) => {
          console.log(val);
          this.coreService.openSnackBar('Appoinment Booking successfully');
          this.dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }

    getalldoctors()
    {
      this.s.getAllDoctors().subscribe(r=>{
        this.allDoctors=r;
        console.log(r);
      })
    }

   
  }
