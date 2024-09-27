import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) { }

  general(): void {
    this.router.navigate(['reporte-general']);
  }

  cuadrillas(): void {
    this.router.navigate(['buscar-cuadrilla']);
  }

  empleado(): void {
    this.router.navigate(['buscar-empleado']);
  }

}
