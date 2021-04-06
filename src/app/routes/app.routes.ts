import { Routes } from '@angular/router';
import { BusquedaGeneralComponent } from '../pages/busqueda-general/busqueda-general.component';
import { BusquedaPaisComponent } from '../pages/busqueda-pais/busqueda-pais.component';
import { BusquedaPalabrasClaveComponent } from '../pages/busqueda-palabras-clave/busqueda-palabras-clave.component';

export const ROUTES: Routes = [
    { path: 'busqueda-general/:search', component: BusquedaGeneralComponent },
    { path: 'busqueda-general', component: BusquedaGeneralComponent },
    { path: 'busqueda-palabra-clave/:key', component: BusquedaPalabrasClaveComponent },
    { path: 'busqueda-palabra-clave', component: BusquedaPalabrasClaveComponent },
    { path: 'busqueda-pais/:countryId', component: BusquedaPaisComponent },
    { path: 'busqueda-pais', component: BusquedaPaisComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
