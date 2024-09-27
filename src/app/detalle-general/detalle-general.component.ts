import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-general.component.html',
  styleUrls: ['./detalle-general.component.css']
})
export class DetalleGeneralComponent implements OnInit {
  datos: any = {};

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    const datosGuardados = localStorage.getItem('datos_reporte_general');
    this.datos = datosGuardados ? JSON.parse(datosGuardados) : null; 

    if (this.datos) {
      console.log('Aqui esta el numero de cuadrilla para la API', this.datos.num_cuadrilla);
    }
  }
}
