import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgpatComponent } from './rgpat.component';

describe('RgpatComponent', () => {
  let component: RgpatComponent;
  let fixture: ComponentFixture<RgpatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgpatComponent]
    });
    fixture = TestBed.createComponent(RgpatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
