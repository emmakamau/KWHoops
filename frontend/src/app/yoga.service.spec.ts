import { TestBed } from '@angular/core/testing';

import { YogaService } from './yoga.service';

describe('YogaService', () => {
  let service: YogaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YogaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
