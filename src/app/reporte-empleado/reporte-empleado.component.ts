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
    this.datos = this.dataService.getDatos();  
    console.log(this.datos);  
    console.log(this.datos.nombre);
  }
}
