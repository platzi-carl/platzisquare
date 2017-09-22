import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Lugar } from '../../../core/models/Lugar';
import { LugaresService } from '../../services/luegares.service';

@Component({
  selector: 'pz-detalle-lugar',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  lugar: Lugar;
  lat: number;
  lng: number;

  constructor(private route: ActivatedRoute, private lugaresServices: LugaresService) {   }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.lugaresServices.getLugar(id)
        .subscribe((lugar) => {

          this.lugar  = lugar;
          this.lat    = this.lugar.latitud;
          this.lng    = this.lugar.longitud;
        });
  }
}
