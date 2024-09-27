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
  nombre: string = "";

  constructor(private router:Router, private dataService: DataServiceService) {}

    onSubmit() {
      if (this.nombre) {
        console.log(this.nombre);
        // Aquí puedes manejar el envío del formulario
        const datos = {
          nombre: this.nombre,
        };
        this.dataService.setDatos(datos);  // Guarda el objeto JSON en el servicio
        this.router.navigate(['reporte']);
        
      }
    }
}
