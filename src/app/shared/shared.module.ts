import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { AlertComponent } from './components/alert/alert.component';

// SERVICES
import { environment } from './../../environments/environment';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AlertComponent],
  providers: [AlertService],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AlertComponent
  ]
})
export class SharedModule {
  constructor() {
    console.log('shared module');

  }
}
