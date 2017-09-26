import { HttpClient } from '@angular/common/http';
import { firebaseConfig } from '../../../environments/firebase.config';
import { Observable } from 'rxjs/Rx';
import { Inject, Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase';
import { Categoria } from '../../shared/models/categorias';
import { FirebaseApp } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

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
      .map(Categoria.fromJsonLArray);
  }

  editar(cat: any) {
    console.log('Editando cat: ', cat.isActive);
    this.db.database.ref(`Categorias/${cat.$key}`).set({
      name: cat.name,
      descripcion: cat.descripcion || '',
      imagenUrl: cat.imagenUrl || '',
      isActive: cat.isActive,
    });
  }
  save(cat: any) {
    this.db.database.ref('Categorias').push({
      name: cat.name,
      descripcion: cat.descripcion || null,
      imagenUrl: cat.imagenUrl || null,
      isActive: cat.isActive,
    });
  }

  delete(categoriaId: string): Observable<any> {
      const url = firebaseConfig.databaseURL + '/Categorias/' + categoriaId + '.json';
      return this.http.delete(url);
  }
}
