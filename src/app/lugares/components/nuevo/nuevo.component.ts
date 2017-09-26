import { Component, OnInit } from '@angular/core';

import { Lugar, GeoData } from '../../models/lugar';
import { LugaresService } from '../../services/luegares.service';

@Component({
  selector: 'pz-nuevo-lugar',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoLugarComponent implements OnInit {
  lugar: Lugar;
  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    this.lugar = new Lugar();
  }

  onSubmit() {
    this.lugaresService.obtenerGeoData(this.lugar.direccion)
        .do(console.log)
        .subscribe((response) => {
          const _addres = new GeoData(response.results[0]);
          console.log(_addres);

          this.lugar.latitud          = _addres.location.lat;
          this.lugar.longitud         = _addres.location.lng;
          this.lugar.direccion_format = _addres.formatted_address;
          console.log(this.lugar);

          this.lugaresService.guardarLugar(this.lugar);
        });

    console.log(this.lugar);
  }

}
