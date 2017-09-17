import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { RegisterComponent } from '../shared/components/register/register.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: '../lugares/lugares.module#LugaresModule'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent
  ]
})
export class LayoutModule { }
