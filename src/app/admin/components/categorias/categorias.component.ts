import { Error } from 'tslint/lib/error';
import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../initdb/models/categoria';


@Component({
  selector: 'pz-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  action: any;
  categorias: Categoria[];
  categoria: Categoria;
  showCategoryForm: boolean;

  constructor(private categoriaService: CategoriasService, private alert: AlertService) { }

  ngOnInit() {
    this.showCategoryForm = false;

    this.categoriaService.get().subscribe((data) => {
      this.categorias = data;
    });
  }


  onSubmit() {
    if (!this.categoria.name) {
      this.alert.danger('Debes agregar <strong>un nombre</strong>');
      return;
    } else {
      if (this.categoria.$key) {
        console.log('editar....');
        this.categoriaService.editar(this.categoria);
        this.alert.success(`<strong>OK:</strong> Categoria <strong>${this.categoria.name}</strong> modificada correctamente.`);
      } else {
        console.log('agregar....');
        this.categoriaService.save(this.categoria);
        this.alert.success(`<strong>OK:</strong> Categoria <strong>${this.categoria.name}</strong> añadida correctamente.`);
      }

      this.categoria = null;
      this.showCategoryForm = false;
    }
  }


  edita(cat: Categoria) {
    this.showCategoryForm = true;
    this.categoria = Object.assign({}, cat);
  }


  delete(id: string) {
    this.categoriaService.delete(id).subscribe(data => {
      this.alert.success(`<strong>OK:</strong> Categoria <strong>${id}</strong> eliminada correctamente.`);
    }, (error: Error) => {
      this.alert.danger(`ERROR: ${error.message}`);
    });
  }


  toggleForm(show) {
    this.showCategoryForm = show;
    this.categoria = new Categoria('', '', '', '', '',  null, false, null, true);
  }

  cambiarEstado(categoria: Categoria) {
    console.log('activar categoria', categoria);

    let cat = Object.assign({}, categoria);
    cat.isActive = categoria.isActive = !categoria.isActive;
    this.categoriaService.editar(cat);
  }
}
