import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentbookingComponent } from './appoinmentbooking.component';

describe('AppoinmentbookingComponent', () => {
  let component: AppoinmentbookingComponent;
  let fixture: ComponentFixture<AppoinmentbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentbookingComponent]
    });
    fixture = TestBed.createComponent(AppoinmentbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
