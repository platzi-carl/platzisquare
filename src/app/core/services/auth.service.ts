import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'util';

import { AngularFireAuth } from 'angularfire2/auth/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { User } from '../models/User';
import { Subject, Observable } from 'rxjs/Rx';


@Injectable()
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFireDatabase,
    private fb: FirebaseApp
  ) {
    this.isLogeed();
  }

  public login = (user_data: User) => {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user_data.email, user_data.password);
  }

  public regitro = (user_data: User) => {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user_data.email, user_data.password);
  }

  public isLogeed() {
    return this.angularFireAuth.authState;
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }
}
