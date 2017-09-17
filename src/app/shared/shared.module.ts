import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { AlertComponent } from './components/alert/alert.component';

// SERVICES
import { AlertService } from './services/alert.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlertComponent, LoginComponent, RegisterComponent],
  providers: [AlertService],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule {
  constructor() {
    console.log('shared module');

  }
}
