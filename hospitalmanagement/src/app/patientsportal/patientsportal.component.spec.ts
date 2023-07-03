import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsportalComponent } from './patientsportal.component';

describe('PatientsportalComponent', () => {
  let component: PatientsportalComponent;
  let fixture: ComponentFixture<PatientsportalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsportalComponent]
    });
    fixture = TestBed.createComponent(PatientsportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
