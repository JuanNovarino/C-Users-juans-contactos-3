import { CanActivateFn } from '@angular/router';

export const loggedUserGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
