import { Categoria } from './categoria';

export class LugarFs {
  constructor(
    public id: string,
    public name: string,
    public categories: Array<Categoria>,
    public location: Location,
    stats: Stats
  ) {}

  static fromJsonList(array): LugarFs[] {
    return array.map(LugarFs.fromJson);
  }

  static fromJson({ id, name, categories, location, stats }): LugarFs {
    return new LugarFs(id, name, categories, location, stats);
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
