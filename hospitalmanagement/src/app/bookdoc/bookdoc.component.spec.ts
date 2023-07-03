import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdocComponent } from './bookdoc.component';

describe('BookdocComponent', () => {
  let component: BookdocComponent;
  let fixture: ComponentFixture<BookdocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookdocComponent]
    });
    fixture = TestBed.createComponent(BookdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
