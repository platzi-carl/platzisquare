import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Lugar } from '../../../core/models/Lugar';
import { LugaresService } from '../../services/luegares.service';

@Component({
  selector: 'pz-app-lugares-list',
  templateUrl: './lugares-list.component.html',
  styleUrls: ['./lugares-list.component.css']
})
export class LugaresListComponent implements OnInit {
  lat: number;
  lng: number;
  lugares$: Lugar[];

  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    this.lat = 38.536366;
    this.lng = -0.132404;

    this.lugaresService.getAll().subscribe((result) => {
      console.log(result);
      this.lugares$ = result;
    });
  }

}
