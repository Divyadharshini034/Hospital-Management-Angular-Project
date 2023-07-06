import { TestBed } from '@angular/core/testing';

import { ActivatedoctorService } from './activatedoctor.service';

describe('ActivatedoctorService', () => {
  let service: ActivatedoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
