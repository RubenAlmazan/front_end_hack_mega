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
    this.datos = this.dataService.getDatos();  
    console.log(this.datos);  
    console.log(this.datos.nombre);
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
      nombre: this.datos.nombre,
    };
    this.dataService.setDatos(datos);
    this.router.navigate(['detalle-orden']); // Usa paréntesis para llamar al método
  }

}
