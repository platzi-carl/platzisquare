import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LugaresComponent } from './lugares.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';

// Configuración de rutas LugaresModule
// --------------------------------------------------
const routes: Routes = [
  { path: '', component: LugaresComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LugaresComponent, LugaresListComponent]
})
export class LugaresModule {
  constructor() {
    console.log('lugares component');
  }
}
