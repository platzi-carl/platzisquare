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
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {}

  // Obtiene listado de lugares
  // -------------------------------------
  getVenues(categoria_id: string) {
    // const url = `${this.lugares_url}?ll=${this.lat},${this.lng}&limit=20
    //               &categoryId=${cat.id}&oauth_token=${this.token}&v=20170919`;
  }
}
