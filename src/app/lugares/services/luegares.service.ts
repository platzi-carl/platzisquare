import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

// LOCAL IMPORTS

// VENDORS IMPORTS
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Lugar } from '../../core/models/Lugar';

@Injectable()
export class LugaresService {
  api_endpoint: string;

  constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
    this.api_endpoint = environment.API_ENDPOINT;
   }

  // Obtiene lista de lugares
  // -------------------------------------------
  getAll(): Observable<Lugar[]> {
    return this.afDB.list('Lugares').map(Lugar.fromJsonList);
  }

  // Obtiene datos de un lugar especifico
  // -------------------------------------------
  getLugar(id: string): Observable<Lugar> {
    return this.afDB.object(`${this.api_endpoint}lugares/${id}`);
  }

  // Crea un nuevo lugar en la base de datos
  // --------------------------------------------
  public guardarLugar(lugar) {
    // this.afDB.database.ref(`lugares/${Guid.newGuid()}`).set(lugar);
  }

  // Obtiene datos de una direccion
  // ---------------------------------------------
  public obtenerGeoData(direccion) {
    direccion = `${direccion.calle},${direccion.ciudad}, ${direccion.pais}`;
    return this.http.get<ItemsResponse>(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`);
  }

}

interface ItemsResponse {
  results: string[];
}
