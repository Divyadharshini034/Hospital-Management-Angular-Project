import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { CoreService } from '../services/core.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {

  doctorForm: FormGroup;

  departments : string[] = ['Orthopedics','Cardiology','Otorhinolaryngology','Ophthalmology','Psychiatry','Internal medicine','Radiology','Surgery','Pediatrics','Neurology','Urology','Anesthesiology','Nephrology','Neurosurgery','Gastroenterology','Pulmonology','General surgery','Intensive care medicine','Oncology','Pathology','Emergency medicine','Neonatology','Hematology','Pharmacy','Physical medicine and rehabilitation','Vascular surgery','Geriatrics','Gynaecology','Cardiac surgery','Outpatient department','Nuclear medicine','Infectious diseases','Clinical pathology','Intensive care unit','operating room','Casualty department']

constructor(private fb: FormBuilder,
 
  private dialogRef: MatDialogRef<UpdatedoctorComponent>,
 private service:DoctorService, private coreService:CoreService, @Inject(MAT_DIALOG_DATA) public data: any){

    this.doctorForm = this.fb.group({
      id:'',
      name:'',
      mobile:'',
       email:'',
       qualification:'', 
        gender:'',
        department:'',
        birthdate:''
    });
  }
  ngOnInit(): void {
    this.doctorForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.doctorForm.valid) {
      if (this.data) {
        this.service
          .updateDoctors(this.data.id, this.doctorForm.value)
          .subscribe({
            next: (val: any) => {
              console.log(val);
              this.coreService.openSnackBar('Doctor detail updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }  
    }
  }

}
