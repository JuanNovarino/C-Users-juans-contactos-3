import { CanActivateChildFn, RedirectCommand, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { inject } from '@angular/core';

export const onlyPublicUserGuardGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService)
  if (!authService.token) return true;
  const router = inject(Router)
  const urlTree: UrlTree = router.parseUrl('/contactos');
  return new RedirectCommand(urlTree);
  
};
