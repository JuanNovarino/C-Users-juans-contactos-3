import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { onlyPublicUserGuardGuard } from './guard/guards/only-public-user-guard-guard';

describe('onlyPublicUserGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyPublicUserGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
