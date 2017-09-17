import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'pz-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  isLoggedIn = false;

    constructor(private authService: AuthService, private router: Router) {
      this.authService.isLogeed().subscribe(
        response => {

          if (response && response.uid) {
            this.isLoggedIn = true;
          }else {
            this.isLoggedIn = false;
          }
        },
        error => {
          this.isLoggedIn = false;
        }
      );
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
