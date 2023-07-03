import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorappointmentComponent } from './doctorappointment.component';

describe('DoctorappointmentComponent', () => {
  let component: DoctorappointmentComponent;
  let fixture: ComponentFixture<DoctorappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorappointmentComponent]
    });
    fixture = TestBed.createComponent(DoctorappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
