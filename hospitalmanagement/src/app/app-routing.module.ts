import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { DoctorComponent } from './doctor/doctor.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsportalComponent } from './patientsportal/patientsportal.component';
import { SeedoctorsComponent } from './seedoctors/seedoctors.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { DoctorsigninComponent } from './doctorsignin/doctorsignin.component';
import { PatientsigninComponent } from './patientsignin/patientsignin.component';
import { PatientregComponent } from './patientreg/patientreg.component';
import { RgdocComponent } from './rgdoc/rgdoc.component';
import { RgpatComponent } from './rgpat/rgpat.component';
import { AppoinmentbookingComponent } from './appoinmentbooking/appoinmentbooking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookdocComponent } from './bookdoc/bookdoc.component';
import { AboutComponent } from './about/about.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './department/department.component';
import { UsericonComponent } from './usericon/usericon.component';
import { ActivatedComponent } from './activated/activated.component';


const routes: Routes = [
  {path:'', title:'Hospital Management', redirectTo:'frontpage',pathMatch:'full'},
  {path:'frontpage',component:FrontpageComponent},
  
  {path:'doctor',component:DoctorComponent},
  {path:'createdoctor',component:CreatedoctorComponent},
  {path:'patients',component:PatientsComponent},
  {path:'patientsportal',component:PatientsportalComponent},
  {path:'seedoctors',component:SeedoctorsComponent},
  {path:'appoint',component:DoctorappointmentComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'doctorregister',component:DoctorregisterComponent},
  {path:'doctorsignin',component:DoctorsigninComponent},
  {path:'doctorappoinment',component:DoctorappointmentComponent},
  {path:'patientreg',component:PatientregComponent},
  {path:'pateintsignin',component:PatientsigninComponent},
  {path:'rgdoc',component:RgdocComponent},
  {path:'rgpat',component:RgpatComponent},
  {path:'bookingappoinment',component:AppoinmentbookingComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'bookdoc',component:BookdocComponent},
  {path:'about',component:AboutComponent},
  {path:'emergency',component:EmergencyComponent},
  {path:'contact',component:ContactComponent},
  {path:'department',component:DepartmentComponent},
  {path:'usericon',component:UsericonComponent},
  {path:'activate',component:ActivatedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
