import { TestBed } from '@angular/core/testing';

import { OnlyLoggedUserGuard } from './only-logged-user-guard';

describe('OnlyLoggedUserGuard', () => {
  let service: OnlyLoggedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyLoggedUserGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
