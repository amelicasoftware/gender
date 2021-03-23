import { Routes } from '@angular/router';
import { BusquedaGeneralComponent } from '../pages/busqueda-general/busqueda-general.component';
import { BusquedaPaisComponent } from '../pages/busqueda-pais/busqueda-pais.component';

export const ROUTES: Routes = [
    { path: 'busqueda-general', component: BusquedaGeneralComponent },
    { path: 'busqueda-pais', component: BusquedaPaisComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
