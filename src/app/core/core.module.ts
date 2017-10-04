import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { NotfoundComponent } from './components/notfound/notfound.component';

// SERVICES
import { AuthGuard } from './services/guard.service';
import { AuthService } from './services/auth.service';

// Firebase
import { firebaseConfig } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    NotfoundComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]
})
export class CoreModule {
}
