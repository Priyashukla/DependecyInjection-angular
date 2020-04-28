import { TestBed } from '@angular/core/testing';

import { UsersresolveGuard } from './usersresolve.guard';

describe('UsersresolveGuard', () => {
  let guard: UsersresolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersresolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
