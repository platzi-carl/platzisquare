import { FirebaseApp } from 'angularfire2';

import { Lugar } from '../core/models/Lugar';
import { Categoria } from '../shared/models/categorias';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { database, initializeApp } from 'firebase';
import { firebaseConfig } from '../../environments/firebase.config';
import { CategoriasDb } from '../../../db-seed';

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
  token     = '51LI3TEMLPQVIENBCPZEKGMRCARDEMLPUCTVKCRZCVA3XAEG';
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

  inicializar_db() {

    const cat_url = `${this.cat_api_url}?oauth_token=${this.token}&v=20170919`;
    this.http.get<Categoria[]>(cat_url).subscribe(categorias => {
      this.categorias = categorias;
    });

    CategoriasDb.Categorias.forEach(cat => {
      // tslint:disable-next-line:max-line-length
      const url = `${this.lugares_api_url}?ll=${this.lat},${this.lng}&limit=${this.limit}&categoryId=${cat.id}&oauth_token=${this.token}&v=20170919`;
      const categoriasRef = database().ref('Categorias');
      const lugaresRef = database().ref('Lugares');

      console.log('Agregando categoría...', cat.name);
      // Insertar categoría
      console.log(cat);

      const catRef = categoriasRef.push({
        name: cat.name,
        pluralName: cat.pluralName,
        shortName: cat.shortName,
        descripcion: '',
        imagenUrl: '',
        isActive: false,
      });

      // Insertar los lugares de la categoria actual
      let lugaresKeysPorCategoria = [];


      // Busca lugar por categoria
      this.http.get<LugaresResponseFs>(url).subscribe((res) => {
        this.lugares = res.response.venues.map(LugaresFs.fromJson);
        let lugarRef = null;

        console.log(this.lugares);

        this.lugares.forEach((lugar) => {
          lugarRef = lugaresRef.push({
            nombre: lugar.name,
            distancia: lugar.location.distance,
            isActive: true,
            isPremium: false,
            latitud: lugar.location.lat,
            longitud: lugar.location.lng,
            descripcion: 'N/A',
            fechaCreado: Date.now(),
            userId: '',
            ciudad: lugar.location.city || 'N/A',
            direccion: lugar.location.address || 'N/A',
            categoriaId: catRef.key,
            direccionFormat: lugar.location.formattedAddress || 'N/A'
          });
          lugaresKeysPorCategoria.push(lugarRef.key);
        });


        // Nodo LugaresPorCategorias
        const association = database().ref('LugaresPorCategoria');
        const lugaresPorCategoria = association.child(catRef.key);

        lugaresKeysPorCategoria.forEach(lugarKey => {
          console.log('adding lugar en categoria ');
          const lugaresCategoriaAsociacion = lugaresPorCategoria.child(lugarKey);

          lugaresCategoriaAsociacion.set(true);
        });
      });

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
