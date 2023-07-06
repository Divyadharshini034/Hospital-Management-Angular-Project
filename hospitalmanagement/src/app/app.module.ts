import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { DoctorComponent } from './doctor/doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatepatientsComponent } from './createpatients/createpatients.component';
import { UpdatepatientsComponent } from './updatepatients/updatepatients.component';
import { PatientsComponent } from './patients/patients.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu';
import { PatientsportalComponent } from './patientsportal/patientsportal.component';
import { SeedoctorsComponent } from './seedoctors/seedoctors.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { DoctorsigninComponent } from './doctorsignin/doctorsignin.component';
import { PatientregComponent } from './patientreg/patientreg.component';
import { PatientsigninComponent } from './patientsignin/patientsignin.component';
import { RgdocComponent } from './rgdoc/rgdoc.component';
import { RgpatComponent } from './rgpat/rgpat.component';
import { AppoinmentbookingComponent } from './appoinmentbooking/appoinmentbooking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookdocComponent } from './bookdoc/bookdoc.component';
import { AboutComponent } from './about/about.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './department/department.component';
import { DatePipe } from '@angular/common';
import { UsericonComponent } from './usericon/usericon.component';
import { ActivatedocComponent } from './services/activatedoc/activatedoc.component';
import { ActivatedComponent } from './activated/activated.component';
@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    
    DoctorComponent,
    UpdatedoctorComponent,
    CreatedoctorComponent,
    CreatepatientsComponent,
    UpdatepatientsComponent,
    PatientsComponent,
    PatientsportalComponent,
    SeedoctorsComponent,
    DoctorappointmentComponent,
    LoginComponent,
    DashboardComponent,
    DoctorregisterComponent,
    DoctorsigninComponent,
    PatientregComponent,
    PatientsigninComponent,
    RgdocComponent,
    RgpatComponent,
    AppoinmentbookingComponent,
    NavbarComponent,
    BookdocComponent,
    AboutComponent,
    EmergencyComponent,
    ContactComponent,
    DepartmentComponent,
    UsericonComponent,
    ActivatedocComponent,
    ActivatedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
