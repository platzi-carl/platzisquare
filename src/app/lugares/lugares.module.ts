import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AuthGuard } from './../core/services/guard.service';
import { environment } from '../../environments/environment';
import { LugaresService } from './services/luegares.service';

import { LugaresComponent } from './lugares.component';
import { ListaLugaresComponent } from './components/listado/listado.component';
import { NuevoLugarComponent } from './components/nuevo/nuevo.component';
import { DetalleComponent } from './components/detalle/detalle.component';

// Configuración de rutas LugaresModule
// --------------------------------------------------
const routes: Routes = [
  { path: '', component: LugaresComponent},
  {path: 'lugares/nuevo', component: NuevoLugarComponent, canActivate: [AuthGuard]},
  { path: 'lugares/detalle/:id', component: DetalleComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.MAP_KEY
    })
  ],
  declarations: [
    LugaresComponent,
    ListaLugaresComponent,
    NuevoLugarComponent,
    DetalleComponent
  ],
  providers: [LugaresService]
})
export class LugaresModule {
  constructor() {
  }
}
