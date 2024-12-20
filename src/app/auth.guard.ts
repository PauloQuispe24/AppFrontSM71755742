import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './viewmodels/login-viewmodel.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const valorSessionStorage = sessionStorage.getItem('token');

  if (!valorSessionStorage) {
    router.navigate(['/login'], { queryParams: { blockedPage: state.url } });
    return false;
  }

  return true;
};
