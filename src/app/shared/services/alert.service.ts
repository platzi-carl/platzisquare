import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
      // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
      router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterRouteChange) {
                  // only keep for a single route change
                  this.keepAfterRouteChange = false;
              } else {
                  // clear alert messages
                  this.clear();
              }
          }
      });
  }

  getAlert(): Observable<any> {
      return this.subject.asObservable();
  }

  success(mensaje: string, keepAfterRouteChange = false) {
    console.log('alert success');
    this.alert(TipoAlert.Success, mensaje, keepAfterRouteChange);
  }

  danger(mensaje: string, keepAfterRouteChange = false) {
    this.alert(TipoAlert.Error, mensaje, keepAfterRouteChange);
  }

  info(mensaje: string, keepAfterRouteChange = false) {
    this.alert(TipoAlert.Info, mensaje, keepAfterRouteChange);
  }

  warning(mensaje: string, keepAfterRouteChange = false) {
    this.alert(TipoAlert.Warning, mensaje, keepAfterRouteChange);
  }

  alert(tipo: TipoAlert, mensaje: string, keepAfterRouteChange = false) {
    this.clear();
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ tipo: tipo, mensaje: mensaje });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}

export class Alert {
  tipo: TipoAlert;
  mensaje: string;
  autoclose: boolean;
}

export enum TipoAlert {
  Success,
  Error,
  Info,
  Warning
}
