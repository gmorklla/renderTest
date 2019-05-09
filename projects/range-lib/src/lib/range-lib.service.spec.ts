import { TestBed } from '@angular/core/testing';

import { RangeLibService } from './range-lib.service';

describe('RangeLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangeLibService = TestBed.get(RangeLibService);
    expect(service).toBeTruthy();
  });
});
