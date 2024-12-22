import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

export const authGuard: CanActivateFn = () => {
  if (!environment.production) return true;
  const authService = inject(AuthService);
  return authService.isLogged.getValue();
};
