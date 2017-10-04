import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase';
import { FirebaseApp } from 'angularfire2';

import { Categoria } from '../components/initdb/models/categoria';
import { firebaseConfig } from '../../../environments/environment';

@Injectable()
export class CategoriasService {
  sdkDb: any;

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient,
    @Inject(FirebaseApp) fb: FirebaseApp
  ) {
    this.sdkDb = fb.database();
  }

  get(): Observable<Categoria[]> {
    return this.db
      .list('Categorias')
      .do(console.log)
      .map(Categoria.fromJsonList);
  }

  editar(cat: any) {
    this.db.database.ref(`Categorias/${cat.$key}`).set({
      name: cat.name,
      descripcion: cat.descripcion || '',
      imagenUrl: cat.imagenUrl || '',
      isActive: cat.isActive,
    });
  }

  save(cat: any) {
    this.db.database.ref('Categorias').push(cat);
  }

  async saveCategorias(categorias: Categoria[]) {
    if (categorias && categorias.length > 0) {
      await categorias.forEach(cat => {
        this.save(cat);
      });
    }
  }

  delete(categoriaId: string): Observable<any> {
      const url = firebaseConfig.databaseURL + '/Categorias/' + categoriaId + '.json';
      return this.http.delete(url);
  }
}
