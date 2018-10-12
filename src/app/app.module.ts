import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { FooterComponent } from './footer/footer.component';

import { setTheme } from 'ngx-bootstrap/utils';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PokemonesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    setTheme('bs4');
  }
  

 }
