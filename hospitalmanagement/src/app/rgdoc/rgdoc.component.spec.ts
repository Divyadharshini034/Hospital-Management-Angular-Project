import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgdocComponent } from './rgdoc.component';

describe('RgdocComponent', () => {
  let component: RgdocComponent;
  let fixture: ComponentFixture<RgdocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgdocComponent]
    });
    fixture = TestBed.createComponent(RgdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
