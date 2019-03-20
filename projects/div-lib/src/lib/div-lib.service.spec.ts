import { TestBed } from '@angular/core/testing';

import { DivLibService } from './div-lib.service';

describe('DivLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivLibService = TestBed.get(DivLibService);
    expect(service).toBeTruthy();
  });
});
