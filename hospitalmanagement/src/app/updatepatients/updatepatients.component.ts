import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdatedoctorComponent } from '../updatedoctor/updatedoctor.component';
import { PatientsService } from '../services/patients.service';
import { CoreService } from '../services/core.service';
import { DoctorService } from '../services/doctor.service';
import { Doctors } from '../models/doctor';

@Component({
  selector: 'app-updatepatients',
  templateUrl: './updatepatients.component.html',
  styleUrls: ['./updatepatients.component.css']
})
export class UpdatepatientsComponent implements OnInit {

  
  patientsForm: FormGroup;

  allDoctors :Doctors[]=[];
  constructor(private fb: FormBuilder,
   private s:DoctorService,
    private dialogRef: MatDialogRef<UpdatepatientsComponent>,
   private service:PatientsService, private coreService:CoreService, @Inject(MAT_DIALOG_DATA) public data: any){
  
      this.patientsForm = this.fb.group({
     
         patient_id:'',
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
      if (this.patientsForm.valid) {
        if (this.data) {
          this.service
            .updatePatients(this.data.patient_id, this.patientsForm.value)
            .subscribe({
              next: (val: any) => {
                console.log(val);
                this.coreService.openSnackBar('Patient detail updated!');
                this.dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            });
        }  
      }
    }

    getalldoctors()
  {
    this.s.getAllDoctors().subscribe(r=>{
      this.allDoctors=r;
      console.log(r);
    })
  }
}
