import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregComponent } from './patientreg.component';

describe('PatientregComponent', () => {
  let component: PatientregComponent;
  let fixture: ComponentFixture<PatientregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientregComponent]
    });
    fixture = TestBed.createComponent(PatientregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
