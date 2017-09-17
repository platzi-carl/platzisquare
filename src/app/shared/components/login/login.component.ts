import { Observable } from 'rxjs/Rx';
import { AlertService } from '../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

import { User } from '../../../core/models/User';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'pz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user_info: User;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {  }

  // Genera formulario de login
  // ----------------------------------------------
  createForm(): any {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit = () => {
    this.authService.login(this.loginForm.value).then((response) => {
      if (response && response.uid) {
        this.router.navigate(['lugares']);
      }
    })
    .catch((error) => {
      this.alertService.danger(error.message);
    });
  }

}
