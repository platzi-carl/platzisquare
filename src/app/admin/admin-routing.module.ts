import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { LayoutComponent } from './components/layout/layout.component';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin.component';
import { InitdbComponent } from './components/initdb/initdb.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: '', component: LayoutComponent, children: [
      {path: 'categorias', component: CategoriasComponent},
      {path: 'init-db', component: InitdbComponent}
    ]},
    {path: 'login', component: LoginComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
