import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pz-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isLoggedIn: boolean;

    constructor(private authService: AuthService, private router: Router) {
      this.isLoggedIn = false;

      this.authService.isLogeed().subscribe((response) => {
        if (response && response.uid) {
          this.isLoggedIn = true;
        }
      }, (error) => {
        this.isLoggedIn = false;
      });
      console.log('Ha cambiado', this.isLoggedIn);
    }

    ngOnInit() {
    }

    salir() {
      this.authService.logout().then(() => {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
    }

}
