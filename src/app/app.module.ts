import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as _ from 'lodash';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
