import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReporteComponent } from './reporte/reporte.component';
import { DetalleOrdenComponent } from './detalle-orden/detalle-orden.component';
import { BuscarCuadrillaComponent } from './buscar-cuadrilla/buscar-cuadrilla.component';
import { BuscarEmpleadoComponent } from './buscar-empleado/buscar-empleado.component';
import { ReporteEmpleadoComponent } from './reporte-empleado/reporte-empleado.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';
import { DetalleGeneralComponent } from './detalle-general/detalle-general.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirige la ruta vacía a 'home'
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el componente Dasboard
  { path: 'login', component: LoginComponent }, // Ruta para el componente Login
  { path: 'reporte', component: ReporteComponent }, // Ruta para el componente Reporte
  { path: 'detalle-orden', component: DetalleOrdenComponent }, // Ruta para el componente Reporte
  { path: 'buscar-cuadrilla', component: BuscarCuadrillaComponent }, // Ruta para el componente Reporte
  { path: 'buscar-empleado', component: BuscarEmpleadoComponent }, // Ruta para el componente Reporte
  { path: 'reporte-empleado', component: ReporteEmpleadoComponent }, // Ruta para el componente Reporte
  { path: 'reporte-general', component: ReporteGeneralComponent }, // Ruta para el componente Reporte
  { path: 'detalle-general', component: DetalleGeneralComponent }, // Ruta para el componente Reporte

];
