import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../services/core.service';
import { DoctorService } from '../services/doctor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {


  doctorForm: FormGroup;
  selectedDate: Date|null=null;
  departments : string[] = ['Orthopedics','Cardiology','Otorhinolaryngology','Ophthalmology','Psychiatry','Internal medicine','Radiology','Surgery','Pediatrics','Neurology','Urology','Anesthesiology','Nephrology','Neurosurgery','Gastroenterology','Pulmonology','General surgery','Intensive care medicine','Oncology','Pathology','Emergency medicine','Neonatology','Hematology','Pharmacy','Physical medicine and rehabilitation','Vascular surgery','Geriatrics','Gynaecology','Cardiac surgery','Outpatient department','Nuclear medicine','Infectious diseases','Clinical pathology','Intensive care unit','operating room','Casualty department']
 
  constructor(private fb: FormBuilder,
   private datepipe:DatePipe,
    private dialogRef: MatDialogRef<CreatedoctorComponent>,
   private service:DoctorService, private coreService:CoreService, @Inject(MAT_DIALOG_DATA) public data: any){
  
      this.doctorForm = this.fb.group({
            name:'',
           mobile:'',
            email:'',
           qualification:'', 
           gender:'',
           department:'',
           birthdate: '',
           isActivated:''
      });
    }
    ngOnInit(): void {
      this.doctorForm.patchValue(this.data);
      this.getFormattedDate();
    }
  
    onFormSubmit() {
          this.service.createDoctors(this.doctorForm.value).subscribe({
            next: (val: any) => {
              console.log(val);
              this.coreService.openSnackBar('Doctor added successfully');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        }

        removeTimezone(dateString: string): string {
          const date = new Date(dateString);
          return this.datepipe.transform(date, 'yyyy-MM-dd')||'';
        }

        formatDate(event: any) {
          this.selectedDate = event.value;
        }
      
        getFormattedDate(): string {
          if (this.selectedDate) {
            return this.datepipe.transform(this.selectedDate, 'dd/MM/yyyy')||'';
          }
          return '';
        }
      }
    



