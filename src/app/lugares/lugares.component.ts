import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import {database, initializeApp} from 'firebase';

@Component({
    selector: 'pz-lugares',
    template: `<pz-listado-lugares></pz-listado-lugares>
    <button class="btn btn-secundary" (click)="insertar_categorias()">Cargar categorías</button>
    `
})

export class LugaresComponent implements OnInit {
  api_url   = 'https://api.foursquare.com/v2/venues/search';
  token     = '51LI3TEMLPQVIENBCPZEKGMRCARDEMLPUCTVKCRZCVA3XAEG';
  query_url = '';
  lat       = 38.5374062;
  lng       = -0.147505;
  limit     = 40;
  // Nocturno: 4d4b7105d754a06376d81259, Comida: 4d4b7105d754a06374d81259
  catId     = '4d4b7105d754a06374d81259';
  url       = '';
  data: LugaresFs;
  lugares: Array<LugaresFs>;

    constructor(private http: HttpClient,  private _afdb: AngularFireDatabase) { }

    ngOnInit() {
      // tslint:disable-next-line:max-line-length
      this.url = `${this.api_url}?ll=${this.lat},${this.lng}&limit=${this.limit}&categoryId=${this.catId}&oauth_token=${this.token}&v=20170919`;

      this.http.get<LugaresResponseFs>(this.url)
          .subscribe((res) => {
            this.lugares = res.response.venues.map(LugaresFs.fromJson);
          });

          // console.log(lugaresRef.push({name: 'prueba'}));

    }

    insertar_categorias() {

      const categoriasRef     = database().ref('LugarPorCategoria');
      const subCategoriasRef  = database().ref('SubCategorias');

      const lugaresRef = database().ref('lugares');
      const lugaresKey = [];

      this.lugares.forEach((lugar) => {
        lugar.categories.forEach((cat) => {
          categoriasRef.push({
            id: cat.id,
            nombre: cat.name,
            nombreCorto: cat.shortName
          });
        });

        const lugarRef = lugaresRef.push({
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

        lugaresKey.push(lugarRef.key);

      });
      console.log(lugaresKey);
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
