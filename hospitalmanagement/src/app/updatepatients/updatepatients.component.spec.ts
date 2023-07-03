import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepatientsComponent } from './updatepatients.component';

describe('UpdatepatientsComponent', () => {
  let component: UpdatepatientsComponent;
  let fixture: ComponentFixture<UpdatepatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepatientsComponent]
    });
    fixture = TestBed.createComponent(UpdatepatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
