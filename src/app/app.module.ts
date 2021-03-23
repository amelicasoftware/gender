import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { TargetComponent } from './components/target/target.component';
import { ROUTES } from './routes/app.routes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BusquedaPaisComponent } from './pages/busqueda-pais/busqueda-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaGeneralComponent,
    TargetComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    BusquedaPaisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
