import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-reporte-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-general.component.html',
  styleUrl: './reporte-general.component.css'
})
export class ReporteGeneralComponent {
  datos: any = {};
  elementos = [1, 2, 3, 4];
  showBodies: boolean[] = [];

  constructor(private router: Router, private dataService: DataServiceService) {}

  ngOnInit() {
    this.datos = this.dataService.getDatos();
    this.showBodies = new Array(this.elementos.length).fill(false); // Inicializar el array con `false` para todas las tarjetas
  }

  toggleBody(index: number): void {
    this.showBodies[index] = !this.showBodies[index]; // Alternar visibilidad
  }

  irADetalle(): void {
    const datos = {
      nombre: this.datos.nombre,
    };
    this.dataService.setDatos(datos);
    this.router.navigate(['detalle-orden']);
  }
}
