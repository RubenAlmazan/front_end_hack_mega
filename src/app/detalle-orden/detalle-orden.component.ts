import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-orden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-orden.component.html',
  styleUrl: './detalle-orden.component.css'
})
export class DetalleOrdenComponent implements OnInit{

  datos: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.datos = this.dataService.getDatos();  
    console.log(this.datos);  
    console.log(this.datos.nombre);
  }
}
