import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedComponent } from './activated.component';

describe('ActivatedComponent', () => {
  let component: ActivatedComponent;
  let fixture: ComponentFixture<ActivatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatedComponent]
    });
    fixture = TestBed.createComponent(ActivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
