import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.isAuthenticated().do(authenticated => {
      if (!authenticated) this.router.navigate(['/login']);
    });
  }

  canActivateChild() {
    return this.authService.isAuthenticated().do(authenticated => {
      if (!authenticated) this.router.navigate(['/login']);
    });
  }
}
