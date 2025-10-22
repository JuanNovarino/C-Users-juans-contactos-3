import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loggedUserGuardGuard } from './app/logged-user-guard-guard';

describe('loggedUserGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loggedUserGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
