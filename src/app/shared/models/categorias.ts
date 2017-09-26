export class Categoria {
  constructor(
    public $key?: string,
    public id?: number,
    public name?: string,
    public isActive?: boolean,
    public imageUrl?: string) {
      this.isActive = (this.isActive) ? true : false;
    }

  /**
     * Recibe un objeto JSON y retorna un objeto Lugar mapeado.
     * @param param
     */
    static fromJson({$key, id, name, isActive, imageUrl }): Categoria {
       return new Categoria($key, id, name, isActive, imageUrl );
   }

   /**
    * Recibe un array y lo mapea al objeto Lugar
    */
   static fromJsonLArray(array): Categoria[] {
       return array.map(Categoria.fromJson);
   }
}
