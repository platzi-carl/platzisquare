export class Direccion {
  constructor(result: any) {
      this.formatted_address = result.formatted_address;
      this.location = result.geometry.location;
  }
  private formatted_address: string;
  private location: Location;

  public getLatitud(): number {
      return this.location.lat;
  }
  public getLongitud(): number {
      return this.location.lng;
  }
}
export interface Location {
  lat: number;
  lng: number;
}
