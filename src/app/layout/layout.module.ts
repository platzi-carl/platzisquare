import { AuthGuard } from './../core/services/guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// MODULES
import { SharedModule } from './../shared/shared.module';

// COMPONENTS
import { LayoutComponent } from './layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RegisterComponent } from '../core/components/register/register.component';
import { LoginComponent } from '../core/components/login/login.component';

// SERVICES
import { AlertService } from '../shared/services/alert.service';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: '../lugares/lugares.module#LugaresModule'},

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class LayoutModule { }
