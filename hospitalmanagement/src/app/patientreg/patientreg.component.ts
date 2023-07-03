import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patientsreg } from '../models/patentreg';

@Component({
  selector: 'app-patientreg',
  templateUrl: './patientreg.component.html',
  styleUrls: ['./patientreg.component.css']
})
export class PatientregComponent {


  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private Service: PatientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      patientusername: ['', Validators.required],
      patientemail: ['', [Validators.required, Validators.email]],
      patientpassword: ['', Validators.required]
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }

  signup(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const dg: Patientsreg = {

      patientName: this.signupForm.value.patientName,
      patientusername: this.signupForm.value.patientusername,
      patientemail: this.signupForm.value.patientemail,
      patientpassword: this.signupForm.value.patientpassword,
      
    };

    this.Service.signupPatient(dg).subscribe(
      response => {
        console.log('Signup successful');
        this.signupForm.reset();
        this.router.navigate(['/pateintsignin']);
      },
      error => {
        console.error('Signup failed', error);
      }
    );
  }

}
