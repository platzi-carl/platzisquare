import { NuevoLugarComponent } from './components/nuevo-lugar/nuevo-lugar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core/services/guard.service';
import { LugaresComponent } from './lugares.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';

// Configuración de rutas LugaresModule
// --------------------------------------------------
const routes: Routes = [
  { path: '', component: LugaresComponent},
  {path: 'lugares/nuevo', component: NuevoLugarComponent, canActivate: [AuthGuard]},
  // { path: 'lugares/detalle/:id', component: DetalleComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LugaresComponent, LugaresListComponent, NuevoLugarComponent]
})
export class LugaresModule {
  constructor() {
  }
}
