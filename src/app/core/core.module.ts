import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AlertComponent } from './../shared/components/alert/alert.component';

// SERVICES
import { AuthService } from './services/auth.service';
import { AlertService } from '../shared/services/alert.service';

// Firebase
import { firebaseConfig } from '../../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    AlertComponent
  ],
  providers: [
    AuthService,
    AlertService
  ],
  exports: [
    LayoutComponent,
    AppRoutingModule
  ]
})
export class CoreModule {
}
