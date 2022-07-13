import { TestBed } from '@angular/core/testing';

import { BootcampsService } from './bootcamps.service';

describe('BootcampsService', () => {
  let service: BootcampsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootcampsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
