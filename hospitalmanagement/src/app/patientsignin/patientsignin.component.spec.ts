import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsigninComponent } from './patientsignin.component';

describe('PatientsigninComponent', () => {
  let component: PatientsigninComponent;
  let fixture: ComponentFixture<PatientsigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsigninComponent]
    });
    fixture = TestBed.createComponent(PatientsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
