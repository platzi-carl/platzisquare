import { SharedModule } from '../shared/shared.module';
import { AlertService } from '../shared/services/alert.service';
import { HttpClientModule } from '@angular/common/http/';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasService } from './services/categorias.service';
import { OnOfLabelComponent } from './components/shared/on-of-label.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,

    SharedModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    LayoutComponent,
    CategoriasComponent,
    OnOfLabelComponent
  ],
  providers: [
    CategoriasService
  ]
})
export class AdminModule { }
