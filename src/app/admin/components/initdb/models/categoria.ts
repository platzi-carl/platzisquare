import { LugarFs } from './lugar';

export class Categoria {
  constructor(
    public id: string,
    public name: string,
    public pluralName: string,
    public shortName: string,
    public icon: Icon,
    public primary: boolean,
    public categories: Categoria[]
  ) {}

  static fromJsonList(array): Categoria[] {
    return array.map(LugarFs.fromJson);
  }

  static fromJson({
    id,
    name,
    pluralName,
    shortName,
    icon,
    primary,
    categories
  }): Categoria {
    return new Categoria(
      id,
      name,
      pluralName,
      shortName,
      icon,
      primary,
      categories
    );
  }
}
export class Icon {
  prefix: string;
  suffix: string;
}
export class CategoriasResponse {
  response: {
    categories: Array<Categoria>
  };
}
