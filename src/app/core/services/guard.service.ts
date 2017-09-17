import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isLogeed().subscribe(
      (response) => {
        if (response && response.uid) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }, (error) => {
        this.isLoggedIn = false;
      }
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

      if (!this.isLoggedIn) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      }

      return this.isLoggedIn;
  }
}
