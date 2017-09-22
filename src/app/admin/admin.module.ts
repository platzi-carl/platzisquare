import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [AdminComponent, LoginComponent, LayoutComponent, CategoriasComponent]
})
export class AdminModule { }
