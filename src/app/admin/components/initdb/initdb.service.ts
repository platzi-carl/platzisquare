import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { CategoriasResponse, Categoria } from './models/categoria';
import { environment, firebaseConfig } from '../../../../environments/environment';
import { AlertService } from '../../../shared/services/alert.service';

@Injectable()
export class InitDbService {
  private config_prefix: string;
  private config: any;
  lugares_url: string;
  categorias_url: string;

  constructor(private alert: AlertService, private http: HttpClient) {
    this.config_prefix = 'db_configuracion';

    if(!firebaseConfig.apiKey) {
      this.alert.warning('Para usar el importador, debes editar el archivo: <strong>/src/environments/environment.ts</strong>');
    }

    this.config = this.config_get() || {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId,
      fsq_token: environment.FORSQUERE_TOKEN,
      fsq_lat: '38.5374062',
      fsq_lng: '-0.147505'
    };
    this.init_config();

    this.lugares_url = 'https://api.foursquare.com/v2/venues/search';
    this.categorias_url = 'https://api.foursquare.com/v2/venues/categories/';
  }
  // ===================================================
  // =================== Categorias ====================
  // ===================================================

  // Obtiene listado de categorías
  // -------------------------------------
  getCategories(): Observable<CategoriasResponse> {
    const cat_url = `${this.categorias_url}?oauth_token=${this.config.fsq_token}&v=${Date.now()}`;
    return this.http.get<CategoriasResponse>(cat_url);
  }

  local_getCategories() {
    const categorias: Categoria[] = JSON.parse(sessionStorage.getItem('fsq_categorias'));
    return categorias;
  }

  local_saveCategories(_categorias) {
    sessionStorage.setItem('fsq_categorias', JSON.stringify(_categorias));
  }

  // Configuración
  // --------------------------------------
  config_save(config) {
    sessionStorage.setItem(this.config_prefix, JSON.stringify(config));
  }

  config_get() {
    return JSON.parse(sessionStorage.getItem(this.config_prefix));
  }

  init_config() {
    sessionStorage.setItem(this.config_prefix, JSON.stringify(this.config));
    return this.config;
  }
}
