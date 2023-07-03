import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepatientsComponent } from './createpatients.component';

describe('CreatepatientsComponent', () => {
  let component: CreatepatientsComponent;
  let fixture: ComponentFixture<CreatepatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepatientsComponent]
    });
    fixture = TestBed.createComponent(CreatepatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
