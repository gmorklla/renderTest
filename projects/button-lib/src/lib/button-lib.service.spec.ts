import { TestBed } from '@angular/core/testing';

import { ButtonLibService } from './button-lib.service';

describe('ButtonLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonLibService = TestBed.get(ButtonLibService);
    expect(service).toBeTruthy();
  });
});
