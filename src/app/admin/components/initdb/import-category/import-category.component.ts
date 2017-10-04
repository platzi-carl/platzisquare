import { Component, OnInit } from '@angular/core';

import { CategoriasService } from '../../../services/categorias.service';
import { AlertService } from '../../../../shared/services/alert.service';
import { InitDbService } from '../initdb.service';

import { Observable } from 'rxjs/Observable';
import { Categoria } from '../models/categoria';

import * as _ from 'lodash';

@Component({
  selector: 'pz-import-category',
  templateUrl: './import-category.component.html',
  styleUrls: ['./import-category.component.css']
})
export class ImportCategoryComponent implements OnInit {
  categorias$: Categoria[];
  categorySelected: Categoria;
  listCategoriesToAdd: Categoria[];
  public isLoading: boolean;
  public isLoadingCat: boolean;

  constructor(
    private dbService: InitDbService,
    private alertService: AlertService,
    private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.isLoading = false;
    this.isLoadingCat = false;
    this.categorias$ = this.dbService.local_getCategories();
    this.categorySelected = this.categorias$[0];
  }

  /**
   * Insertar las categorías seleccionadas
   */
  insertarCategorias() {
    this.isLoading = true;
    setTimeout(() => {
      this.categoriasService.saveCategorias(this.listCategoriesToAdd).then(() => {
        this.isLoading = false;
        this.alertService.success('Categorias añadidas correctamente');
      });
    }, 500);
  }

  /**
   * Importa las categorías desde FourSquare si no están en memoria.
   */
  importarCategorias() {
    this.isLoading = true;
    this.categorias$ = [];

    this.categorias$ = this.dbService.local_getCategories();

    if (!this.categorias$) {
      this.dbService.getCategories().subscribe((res) => {
        this.categorias$ = res.response.categories;
        this.dbService.local_saveCategories(res.response.categories);
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }
}
