import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// VENDORS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

// MODULES
import { CoreModule } from './core/core.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { NotfoundComponent } from './core/components/notfound/notfound.component';


// Configuración de rutas principales de la aplicación
// --------------------------------------------------------------------
const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule'},
  { path: '**', pathMatch: 'full', component: NotfoundComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
