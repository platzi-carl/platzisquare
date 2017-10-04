
export class Lugar {
  constructor(
    public nombre: string,
    public distancia: number,
    public isActive: boolean,
    public isPremium: boolean,
    public latitud: number,
    public longitud: number,
    public descripcion: string,
    public fechaCreado: number,
    public userId: string,
    public ciudad: string,
    public direccion: string,
    public categoriaId: string,
    public categoria: string,
    public direccionFormat: string[],
    public $key?: string,
  ) {
  }

  static fromJsonList(array): Lugar[] {
    return array.map(Lugar.fromJson);
  }

  static fromJson({nombre, distancia, isActive, isPremium, latitud,
    longitud, descripcion, fechaCreado, userId, ciudad, direccion, categoriaId, categoria, direccionFormat, $key }): Lugar {
    return new Lugar(
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
      categoriaId,
      categoria,
      direccionFormat,
      $key
    );
  }
}
