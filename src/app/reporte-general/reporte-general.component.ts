import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-reporte-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.css']
})
export class ReporteGeneralComponent {
  datos: any = {};
  elementos = [1, 2, 3, 4];
  showBodies: boolean[] = [];

  constructor(private router: Router, private dataService: DataServiceService) {}

  ngOnInit() {
    this.showBodies = new Array(this.elementos.length).fill(false); 
  }

  toggleBody(index: number): void {
    this.showBodies[index] = !this.showBodies[index]; 
  }

  irADetalle(cuadrilla: number): void {
    const datos = {
      num_cuadrilla: cuadrilla,
    };

    localStorage.setItem('datos_reporte_general', JSON.stringify(datos));  
    this.router.navigate(['detalle-general']);
  }
}
