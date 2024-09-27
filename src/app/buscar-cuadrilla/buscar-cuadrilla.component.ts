import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-buscar-cuadrilla',
  standalone: true,
  imports: [FormsModule], // Debes incluir ReactiveFormsModule aquí
  templateUrl: './buscar-cuadrilla.component.html',
  styleUrls: ['./buscar-cuadrilla.component.css'] // Corregido a 'styleUrls'
})
export class BuscarCuadrillaComponent {
  num_cuadrilla: string = "";

  constructor(private router: Router, private dataService: DataServiceService) { }

  onSubmit() {
    if (this.num_cuadrilla) {
      const datos = {
        num_cuadrilla: this.num_cuadrilla,
      };
      //this.dataService.setDatos(datos);  // Guarda el objeto JSON en el servicio
      localStorage.setItem('buscar_reporte_cuadrilla', JSON.stringify(datos));

      this.router.navigate(['reporte']);

    }
  }
}
