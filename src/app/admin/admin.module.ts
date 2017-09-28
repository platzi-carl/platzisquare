import { HttpClientModule } from '@angular/common/http/';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { OnOfLabelComponent } from './components/shared/on-of-label.component';
import { InitdbComponent } from './components/initdb/initdb.component';
import { ConfiguracionComponent } from './components/initdb/configuracion/configuracion.component';
import { ImportCategoryComponent } from './components/initdb/import-category/import-category.component';
import { ImportVenuesComponent } from './components/initdb/import-venues/import-venues.component';

// Servicios
import { CategoriasService } from './services/categorias.service';
import { AlertService } from '../shared/services/alert.service';
import { InitDbService } from './components/initdb/initdb.service';

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
    OnOfLabelComponent,
    InitdbComponent,
    ConfiguracionComponent,
    ImportCategoryComponent,
    ImportVenuesComponent
  ],
  providers: [
    CategoriasService,
    InitDbService
  ]
})
export class AdminModule { }
