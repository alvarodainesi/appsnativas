import { TestBed } from '@angular/core/testing';

import { OnlyPublicUserGuard } from './only-public-user-guard';

describe('OnlyPublicUserGuard', () => {
  let service: OnlyPublicUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyPublicUserGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
