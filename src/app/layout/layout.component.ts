import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'pz-layout',
  template: `
    <pz-main-header></pz-main-header>
    <pz-main-content></pz-main-content>
    <pz-main-footer></pz-main-footer>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = false;

    this.authService.isLogeed().subscribe(
      response => {
        if (response && response.uid) {
          this.isLoggedIn = true;
        }
      },
      error => {
        this.isLoggedIn = false;
      }
    );
    console.log('Ha cambiado', this.isLoggedIn);
  }

  ngOnInit() {}

  salir() {
    this.authService
      .logout()
      .then(() => {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
