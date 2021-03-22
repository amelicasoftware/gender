import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusquedaGeneralComponent } from './pages/busqueda-general/busqueda-general.component';
import { TargetComponent } from './components/target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaGeneralComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
