import { AlertService } from '../../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InitDbService } from '../initdb.service';

@Component({
  selector: 'pz-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dbService: InitDbService,
    private alertService: AlertService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.form.setValue(this.dbService.config_get());
  }

  createForm(): any {
    this.form = this.fb.group({
      'apiKey': ['', [Validators.required]],
      'authDomain': ['', Validators.required],
      'databaseURL': ['', Validators.required],
      'projectId': ['', Validators.required],
      'storageBucket': ['', Validators.required],
      'messagingSenderId': ['', Validators.required],
      'fsq_token': ['', Validators.required],
      'fsq_lat': ['', Validators.required],
      'fsq_lng': ['-', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.dbService.config_save(this.form.value);
      this.alertService.success('<strong><i class="fa fa-check"></i> OK: </strong>Configuración guardada correctamente.');
    } else {
      this.alertService.warning('<i class="fa fa-info-circle"></i> ERROR: Debes completar toda la info del formulario.');
    }
  }
}
