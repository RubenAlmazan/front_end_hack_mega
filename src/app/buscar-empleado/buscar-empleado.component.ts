import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-empleado.component.html',
  styleUrl: './buscar-empleado.component.css'
})
export class BuscarEmpleadoComponent {

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
        this.router.navigate(['reporte-empleado']);
        
      }
    }
}
