import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import { User } from '../../../core/models/User';

// SERVICES
import { AuthService } from '../../../core/services/auth.service';
import { AlertService } from '../../../shared/services/alert.service';


@Component({
  selector: 'pz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user_info: User;
  isLoading: boolean;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.isLoading = false;
  }

  // Genera formulario de login
  // ----------------------------------------------
  createForm(): any {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  onSubmit = () => {
    this.isLoading = true;

    this.authService.login(this.loginForm.value).then((response) => {
      if (response && response.uid) {
        this.isLoading = false;
        this.router.navigate([this.returnUrl]);
      }
    })
    .catch((error) => {
      this.isLoading = false;
      this.alertService.danger(error.message);
    });
  }

}
