import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { DoctorReg } from '../models/doctorreg';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent {


  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private Service: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      doctorname: ['', Validators.required],
      doctorusername: ['', Validators.required],
      doctoremail: ['', [Validators.required, Validators.email]],
      doctorpassword: ['', Validators.required]
    });
  }

  get formControls() {
    return this.signupForm.controls;
  }

  signup(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const dg: DoctorReg = {

      doctorname: this.signupForm.value.doctorname,
      doctorusername: this.signupForm.value.doctorusername,
      doctoremail: this.signupForm.value.doctoremail,
      doctorpassword: this.signupForm.value.doctorpassword,
      
    };

    this.Service.signupDoctor(dg).subscribe(
      response => {
        console.log('Signup successful');
        this.signupForm.reset();
        this.router.navigate(['/doctorsignin']);
      },
      error => {
        console.error('Signup failed', error);
      }
    );
  }

}
