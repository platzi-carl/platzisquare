import { NuevoLugarComponent } from './components/nuevo-lugar/nuevo-lugar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AuthGuard } from './../core/services/guard.service';
import { LugaresComponent } from './lugares.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { environment } from '../../environments/environment';

import { LugaresService } from './services/luegares.service';
import { DetalleLugarComponent } from './components/detalle-lugar/detalle-lugar.component';

// Configuración de rutas LugaresModule
// --------------------------------------------------
const routes: Routes = [
  { path: '', component: LugaresComponent},
  {path: 'lugares/nuevo', component: NuevoLugarComponent, canActivate: [AuthGuard]},
  { path: 'lugares/detalle/:id', component: DetalleLugarComponent},
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
    LugaresListComponent,
    NuevoLugarComponent,
    DetalleLugarComponent
  ],
  providers: [LugaresService]
})
export class LugaresModule {
  constructor() {
  }
}
