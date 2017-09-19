import { arrayify } from 'tslint/lib/utils';
import { AbstractControl } from '@angular/forms';

export class User {
  email: string;
  name: string;
  password: string;
  repeat_password: string;
}

export class UserResponse {
  constructor(userData: any) {}

    displayName: string;
    email: string;
    emailVerified: boolean;
    phoneNumber: string;
    photoURL: string;
    providerData: Array<any>;
    uid: string;
}

export class FormValidation {
  public validationMessage: any = {
    email: {

    },
    name: {

    },
    password: {

    },
    passwordMatch: {

    }
  };


  static MatchPassword = (control: AbstractControl): {[key: string]: boolean} => {
    const password = control.get('password').value;
    const confirmPassword = control.get('password_repeat').value;

    if (password !== confirmPassword) {
         console.log('false');
         control.get('password_repeat').setErrors( {nomatch: true} );
     } else {
         return null;
     }
  }
}
