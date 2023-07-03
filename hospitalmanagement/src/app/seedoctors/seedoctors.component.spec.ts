import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedoctorsComponent } from './seedoctors.component';

describe('SeedoctorsComponent', () => {
  let component: SeedoctorsComponent;
  let fixture: ComponentFixture<SeedoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeedoctorsComponent]
    });
    fixture = TestBed.createComponent(SeedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
