import { FirebaseApp } from 'angularfire2';

import { Lugar } from '../core/models/Lugar';
import { Categoria } from '../shared/models/categorias';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { database, initializeApp } from 'firebase';

import { environment } from '../../environments/environment';

@Component({
  selector: 'pz-admin',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminComponent implements OnInit {
  lugares_api_url   = 'https://api.foursquare.com/v2/venues/search';
  cat_api_url = 'https://api.foursquare.com/v2/venues/categories/';
  token     = environment.FORSQUERE_TOKEN;
  query_url = '';
  lat       = 38.5374062;
  lng       = -0.147505;
  limit     = 20;
  url       =  '';

  categorias: Categoria[];
  lugares: LugaresFs[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}


export class LugaresResponseFs {
  response: {
    venues: Array<LugaresFs>
  };
}

export class Category {
  constructor(
    public id: string,
    public name: string,
    public pluralName: string,
    public shortName: string,
    public icon: string,
    public primary: boolean,
    categories: Categoria[]
  ) {}

  static fromJsonList(array): Category[] {
    return array.map(LugaresFs.fromJson);
  }

  static fromJson({id, name, pluralName, shortName, icon, primary, categories }): Category {
    return new Category(id, name, pluralName, shortName, icon, primary, categories);
  }
}

export interface Location {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  distance: number;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

export interface Stats {
  checkinsCount: number;
  usersCount: number;
  tipCount: number;
}

export class LugaresFs {
  constructor(
    public id: string,
    public name: string,
    public categories: Array<Category>,
    public location: Location,
    stats: Stats
  ) {}

  static fromJsonList(array): LugaresFs[] {
    return array.map(LugaresFs.fromJson);
  }

  static fromJson({id, name, categories, location, stats }): LugaresFs {
    return new LugaresFs( id, name, categories, location, stats);
  }
}
