import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Categoria, CategoriasResponse } from './models/categoria';

@Component({
  selector: 'pz-initdb',
  templateUrl: './initdb.component.html',
  styleUrls: ['./initdb.component.css']
})
export class InitdbComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Obtiene listado de lugares
  // -------------------------------------
  getVenues(categoria_id: string) {
  }
}
