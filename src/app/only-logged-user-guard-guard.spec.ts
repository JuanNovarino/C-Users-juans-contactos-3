import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { onlyLoggedUserGuardGuard } from './guard/guards/only-logged-user-guard-guard';

describe('onlyLoggedUserGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyLoggedUserGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
