import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Librerias
import { MenuModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { TargetComponent } from './components/target/target.component';
import { ROUTES } from './routes/app.routes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BusquedaPaisComponent } from './pages/busqueda-pais/busqueda-pais.component';
import { BusquedaPalabrasClaveComponent } from './pages/busqueda-palabras-clave/busqueda-palabras-clave.component';
import { BannerSearchesComponent } from './components/banner-searches/banner-searches.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaGeneralComponent,
    TargetComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    BusquedaPaisComponent,
    BusquedaPalabrasClaveComponent,
    BannerSearchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
