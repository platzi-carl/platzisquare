import { LayoutComponent } from './core/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresModule } from './lugares/lugares.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { RegisterComponent } from './core/components/register/register.component';

// Configuración de rutas principales de la aplicación
// --------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'lugares' },
    { path: 'lugares', loadChildren: './lugares/lugares.module#LugaresModule'},

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', component: NotfoundComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];
