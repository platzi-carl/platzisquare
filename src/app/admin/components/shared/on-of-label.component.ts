import { Categoria } from '../../../shared/models/categorias';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pz-on-of-label',
  template: `
    <button type="button" (click)="onOffActive()" class="btn btn-sm btn-{{type}}">
      <i class="fa fa-{{icon}}"></i> {{text}}
    </button>
  `,
  styles: []
})
export class OnOfLabelComponent implements OnInit {
  @Input() categoria: Categoria;
  // tslint:disable-next-line:no-output-rename
  @Output('togglestate') onActive = new EventEmitter<Categoria>();

  type: string;
  icon: string;
  text: string;

  constructor() { }

  ngOnInit() {
    const isActive = this.categoria.isActive;
    this.icon = (isActive) ? 'check' : 'remove';
    this.text = (isActive) ? 'Sí' : 'No';
    this.type = (isActive) ? 'success' : 'secundary';
  }

  onOffActive() {
    this.onActive.emit(this.categoria);
  }

}
