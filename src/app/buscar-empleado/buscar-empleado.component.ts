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

  num_empleado: string = "";

  constructor(private router:Router, private dataService: DataServiceService) {}

    onSubmit() {
      if (this.num_empleado) {
        
        const datos = {
          num_empleado: this.num_empleado,
        };
        localStorage.setItem('buscar_reporte_empleado', JSON.stringify(datos));  

        this.router.navigate(['reporte-empleado']);
        
      }
    }
}
