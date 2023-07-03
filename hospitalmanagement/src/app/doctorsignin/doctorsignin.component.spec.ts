import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsigninComponent } from './doctorsignin.component';

describe('DoctorsigninComponent', () => {
  let component: DoctorsigninComponent;
  let fixture: ComponentFixture<DoctorsigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsigninComponent]
    });
    fixture = TestBed.createComponent(DoctorsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
