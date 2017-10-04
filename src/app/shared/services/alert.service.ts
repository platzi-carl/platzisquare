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
                  this.clear(false);
              }
          }
      });
  }

  getAlert(): Observable<any> {
      return this.subject.asObservable();
  }

  success(mensaje: string, isAutoClose = true, keepAfterRouteChange = false) {
    console.log('alert success');
    this.alert(TipoAlert.Success, mensaje, keepAfterRouteChange);
  }

  danger(mensaje: string, isAutoClose = true, keepAfterRouteChange = false) {
    this.alert(TipoAlert.Error, mensaje, keepAfterRouteChange);
  }

  info(mensaje: string, isAutoClose = true, keepAfterRouteChange = false) {
    this.alert(TipoAlert.Info, mensaje, keepAfterRouteChange);
  }

  warning(mensaje: string, isAutoClose = true, keepAfterRouteChange = false) {
    this.alert(TipoAlert.Warning, mensaje, keepAfterRouteChange);
  }

  alert(tipo: TipoAlert, mensaje: string, isAutoClose = true, keepAfterRouteChange = false) {
    this.clear(false);

    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ tipo: tipo, mensaje: mensaje });
    this.clear(true);
  }

  clear(autoclose) {
    let $this = this;
    // clear alerts
    if (autoclose) {
      setTimeout(function() {
        $this.subject.next();
      }, 4000);
    } else {
      $this.subject.next();
    }
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
