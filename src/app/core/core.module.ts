import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from './services/auth.service';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    MainContentComponent,
    MainHeaderComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    LayoutComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
