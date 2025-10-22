import { CanActivateChildFn, RedirectCommand, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { inject } from '@angular/core';

export const onlyLoggedUserGuardGuard: CanActivateChildFn = (childRoute, state) => {

  const authService = inject(AuthService)
  if (authService.token !== null) return true;
  const router = inject(Router)
  const urlTree: UrlTree = router.parseUrl('/login');
  return new RedirectCommand(urlTree, { skipLocationChange: true });
  return true;
};
