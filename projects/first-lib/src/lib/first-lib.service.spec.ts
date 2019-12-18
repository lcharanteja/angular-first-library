import { TestBed } from '@angular/core/testing';

import { FirstLibService } from './first-lib.service';

describe('FirstLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstLibService = TestBed.get(FirstLibService);
    expect(service).toBeTruthy();
  });
});
