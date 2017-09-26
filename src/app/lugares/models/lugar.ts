import { Guid } from '../../shared/models/tools';


export class Lugar {
  constructor(
    public $key?: string,
    public id?: string,
    public nombre?: string,
    public distancia?: number,
    public cercania?: number,
    public isActive?: boolean,
    public isPremium?: boolean,
    public latitud?: number,
    public longitud?: number,
    public direccion?: Direccion,
    public direccion_format?: string,
    public categorias?: any[],
    public descripcion?: Direccion,
    public creadoPor?: string,
    public fechaCreado?: number
  ) {
      // Asignamos valores por defecto a propiedades que el usuario no tiene acceso

      this.id          = Guid.newGuid();
      this.direccion   = new Direccion();
      this.fechaCreado = Date.now();
      this.creadoPor   = 'GPOLANCO'; // Temporal hasta implementar Auth
  }

    /**
     * Recibe un objeto JSON y retorna un objeto Lugar mapeado.
     * @param param
     */
    static fromJson({$key, id, nombre, distancia, cercania, isActive, isPremium, latitud, longitud, direccion,
       direccion_format, categorias, descripcion, creadoPor, fechaCreado }): Lugar {
        return new Lugar($key, id, nombre, distancia, cercania, isActive, isPremium,
            latitud, longitud, direccion, direccion_format, categorias, descripcion,
            creadoPor, fechaCreado);
    }

    /**
     * Recibe un array y lo mapea al objeto Lugar
     */
    static fromJsonLArray(array): Lugar[] {
        return array.map(Lugar.fromJson);
    }
}

export class Direccion {
    constructor(
        public calle?: string,
        public ciudad?: string,
        public pais?: string
    ) {   }
}

export class GeoData {
    constructor(result: any) {
        this.formatted_address = result.formatted_address;
        this.location = result.geometry.location;
    }
    public formatted_address: string;
    public location: Location;
}
export interface Location {
    lat: number;
    lng: number;
}
