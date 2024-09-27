import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'] // Asegúrate de usar 'styleUrls' y no 'styleUrl'
})
export class ReporteComponent implements OnInit{

  datos: any = {};
  showEmpleados: boolean = false; // Estado para mostrar/ocultar la tabla de empleados
  showOrdenes: boolean = false; // Estado inicial

  constructor(private router: Router, private dataService: DataServiceService) { }

  @ViewChild('cardBody') cardBody!: ElementRef;

  ngOnInit() {
    const datosGuardados = localStorage.getItem('buscar_reporte_cuadrilla');
    this.datos = datosGuardados ? JSON.parse(datosGuardados) : null; 
  }

  toggleBody(): void {
    const body = this.cardBody.nativeElement;
    body.style.display = body.style.display === 'none' || body.style.display === '' ? 'block' : 'none';
  }

  empleados(): void {
    this.showEmpleados = !this.showEmpleados; // Cambia el estado de la tabla de empleados
  }

  ordenes(): void {
    this.showOrdenes = !this.showOrdenes; // Cambia el estado de la tabla de ordenes
  }

  irADetalle(): void {
    const datos = {
      num_cuadrilla: this.datos.num_cuadrilla,
    };
    localStorage.setItem('datos_reporte_cuadrilla', JSON.stringify(datos));
    this.router.navigate(['detalle-orden']); 
  }

}
