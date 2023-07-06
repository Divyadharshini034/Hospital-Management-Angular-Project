import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedocComponent } from './activatedoc.component';

describe('ActivatedocComponent', () => {
  let component: ActivatedocComponent;
  let fixture: ComponentFixture<ActivatedocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatedocComponent]
    });
    fixture = TestBed.createComponent(ActivatedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
