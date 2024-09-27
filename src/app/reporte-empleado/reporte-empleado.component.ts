import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-empleado.component.html',
  styleUrl: './reporte-empleado.component.css'
})
export class ReporteEmpleadoComponent {
  datos: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    const datosGuardados = localStorage.getItem('buscar_reporte_empleado');
    this.datos = datosGuardados ? JSON.parse(datosGuardados) : null; 

    console.log('Aqui esta el numero de empleado para la API ', this.datos.num_empleado);
  }
}
