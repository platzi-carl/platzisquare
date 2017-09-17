import { Component, OnInit } from '@angular/core';

import { TipoAlert, Alert, AlertService } from '../../services/alert.service';

@Component({
  selector: 'pz-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.alerts.push(alert);
    });
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.tipo) {
      case TipoAlert.Success:
        return 'alert alert-success';
      case TipoAlert.Error:
        return 'alert alert-danger';
      case TipoAlert.Info:
        return 'alert alert-info';
      case TipoAlert.Warning:
        return 'alert alert-warning';
    }
  }
}
