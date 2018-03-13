import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isAuthenticated()) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild() {
    if (this.authService.isAuthenticated()) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
