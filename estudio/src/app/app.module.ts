import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactoComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
