import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-orden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-orden.component.html',
  styleUrl: './detalle-orden.component.css'
})
export class DetalleOrdenComponent implements OnInit{

  datos: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    const datosGuardados = localStorage.getItem('buscar_reporte_cuadrilla');
    this.datos = datosGuardados ? JSON.parse(datosGuardados) : null; 

    console.log('Aqui esta el numero de cuadrilla para la API', this.datos.num_cuadrilla);
  }
}
