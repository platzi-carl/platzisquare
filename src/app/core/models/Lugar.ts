
export class Lugar {
  constructor(
    public $key: string,
    public nombre: string,
    public distancia: number,
    public isActive: boolean,
    public isPremium: boolean,
    public latitud: number,
    public longitud: number,
    public descripcion: string,
    public fechaCreado: Date,
    public userId: string,
    public ciudad: string,
    public direccion: string,
    public categoria: string
  ) {
  }

  static fromJsonList(array): Lugar[] {
    return array.map(Lugar.fromJson);
  }

  static fromJson({$key, nombre, distancia, isActive, isPremium, latitud,
    longitud, descripcion, fechaCreado, userId, ciudad, direccion, categoria }): Lugar {
    return new Lugar(
      $key,
      nombre,
      distancia,
      isActive,
      isPremium,
      latitud,
      longitud,
      descripcion,
      fechaCreado,
      userId,
      ciudad,
      direccion,
      categoria
    );
  }
}
