import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Librerias
import { MenuModule } from '@syncfusion/ej2-angular-navigations';

// pipes
import { AuthorsPipe } from './pipes/authors.pipe';
import { TitleArticlePipe } from './pipes/title-article.pipe';

import { AppComponent } from './app.component';
import { BannerSearchesComponent } from './components/banner-searches/banner-searches.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { BusquedaPaisComponent } from './pages/busqueda-pais/busqueda-pais.component';
import { BusquedaPalabrasClaveComponent } from './pages/busqueda-palabras-clave/busqueda-palabras-clave.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ROUTES } from './routes/app.routes';
import { TargetComponent } from './components/target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsPipe,
    BannerSearchesComponent,
    BusquedaGeneralComponent,
    BusquedaPaisComponent,
    BusquedaPalabrasClaveComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    TargetComponent,
    TitleArticlePipe
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
