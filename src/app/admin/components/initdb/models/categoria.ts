import { LugarFs } from './lugar';

export class Categoria {
  constructor(
    public $key: string,
    public id: string,
    public name: string,
    public pluralName: string,
    public shortName: string,
    public icon: Icon,
    public primary: boolean,
    public categories: Categoria[],
    public isActive?: boolean,
  ) {}

  static fromJsonList(array): Categoria[] {
    return array.map(Categoria.fromJson);
  }

  static fromJson({
    $key,
    id,
    name,
    pluralName,
    shortName,
    icon,
    primary,
    categories
  }): Categoria {
    return new Categoria(
      $key,
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
