import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from './../../../shared/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { FormValidation } from '../../../core/models/User';


@Component({
  selector: 'pz-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: FormGroup;
  isLoading: boolean;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {
    this.isLoading = false;
  }

  public createForm() {
    this.user = this.fb.group({
      name            : ['', [Validators.required, Validators.minLength(4)]],
      email           : ['@gmail.com', [Validators.required, Validators.email]],
      password        : ['', [Validators.required, Validators.minLength(6)]],
      password_repeat : ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validator: FormValidation.MatchPassword
    }
  );
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.regitro(this.user.value)
    .then((response) => {
      console.log(response);
      this.alertService.success('Gracias por registrarte en <strong>PlaziSquare</strong>!!!', true);
      this.isLoading = false;
      this.router.navigate(['/']);
    })
    .catch((error) => {
      this.isLoading = false;
      this.alertService.danger(error.message, true);
      console.log(error.message);
    });
  }
}
