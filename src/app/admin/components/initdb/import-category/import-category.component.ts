import { Component, OnInit } from '@angular/core';
import { InitDbService } from '../initdb.service';

import { Observable } from 'rxjs/Observable';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'pz-import-category',
  templateUrl: './import-category.component.html',
  styleUrls: ['./import-category.component.css']
})
export class ImportCategoryComponent implements OnInit {
  categorias$: Categoria[];
  isLoading: boolean;
  constructor(private dbService: InitDbService) { }

  ngOnInit() {
    this.isLoading = false;
  }

  importarCategorias() {
    this.isLoading = true;
    this.categorias$ = [];

    this.dbService.getCategories().subscribe((res) => {
      this.categorias$ = res.response.categories;
      this.isLoading = false;
    });
  }
}
