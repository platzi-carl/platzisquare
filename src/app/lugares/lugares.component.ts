import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase } from 'angularfire2/database';
import {database} from 'firebase';
import { environment } from '../../environments/environment';

@Component({
    selector: 'pz-lugares',
    template: `<pz-listado-lugares></pz-listado-lugares>`
})

export class LugaresComponent implements OnInit {
  api_url   = 'https://api.foursquare.com/v2/venues/search';
  token     = environment.FORSQUERE_TOKEN;
  query_url = '';
  lat       = 38.5374062;
  lng       = -0.147505;
  limit     = 5;
  catId     = '4d4b7105d754a06374d81259';
  categorias= [
    '4d4b7105d754a06372d81259', '4d4b7104d754a06370d81259',
    '4d4b7105d754a06373d81259', '4d4b7105d754a06374d81259',
    '4d4b7105d754a06376d81259', '4d4b7105d754a06377d81259',
    '4d4b7105d754a06375d81259', '4e67e38e036454776db1fb3a',
    '4d4b7105d754a06378d81259', '4d4b7105d754a06379d81259'
  ];
  url       = '';
  data: LugaresFs;
  lugares: Array<LugaresFs>;

  categoriasRef = database().ref('Categorias');
  lugaresRef    = database().ref('Lugares');

    constructor(private http: HttpClient,  private _afdb: AngularFireDatabase) { }

    ngOnInit() {

    }

    async insertar_categorias() {
      const lugaresKey    = [];

      this.categorias.forEach((cat_id) => {
        this.url = `${this.api_url}?ll=${this.lat},${this.lng}&limit=${this.limit}&categoryId=${cat_id}&oauth_token=${this.token}&v=20170919`;
        this.http.get<LugaresResponseFs>(this.url).subscribe((res) => {
          this.lugares = res.response.venues.map(LugaresFs.fromJson);
          this.lugares.forEach(lugar => {
            this.insertarLugar(lugar);
          });
        });

      });
    }

    async getLugaresByCategorias(cat_id) {
      // tslint:disable-next-line:max-line-length
      this.url = `${this.api_url}?ll=${this.lat},${this.lng}&limit=${this.limit}&categoryId=${cat_id}&oauth_token=${this.token}&v=20170919`;

      this.http.get<LugaresResponseFs>(this.url)
      .subscribe((res) => {
        console.log(res);
        
        this.lugares = res.response.venues.map(LugaresFs.fromJson);
      });
    }

    insertarLugar(lugar) {
      let category;

      lugar.categories.forEach((cat) => {
        category = this.categoriasRef.push({
          id: cat.id,
          nombre: cat.name,
          nombreCorto: cat.shortName
        });
      });

      const lugarRef = this.lugaresRef.push({
        id: lugar.id,
        nombre: lugar.name,
        latitud: lugar.location.lat,
        longitud: lugar.location.lng,
        direccion: lugar.location.formattedAddress || '',
        distancia: lugar.location.distance,
        isActive: true,
        isPremium: true,
        descripcion: '',
        fechaCreado: Date.now(),
        ciudad: lugar.location.city || '',
        poblacion: lugar.location.country || '',
        categoria: lugar.categories[0].name,
      });
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
    public primary: boolean
  ) {}

  static fromJsonList(array): Category[] {
    return array.map(LugaresFs.fromJson);
  }

  static fromJson({id, name, pluralName, shortName, icon, primary }): Category {
    return new Category(id, name, pluralName, shortName, icon, primary);
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
