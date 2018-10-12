import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { FooterComponent } from './footer/footer.component';

import { setTheme } from 'ngx-bootstrap/utils';

//JSON
import { HttpClientModule } from '@angular/common/http';

//Servicios
import{ PokeserviceService } from './pokeservice.service'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PokemonesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokeserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    setTheme('bs4');
  }
  

 }
