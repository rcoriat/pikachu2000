import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { FooterComponent } from './footer/footer.component';
import { PokedexentryComponent } from './pokedexentry/pokedexentry.component';
import { setTheme } from 'ngx-bootstrap/utils';

//Servicios
import{ PokeserviceService } from './pokeservice.service';


const routes: Routes = [
  { path: 'pokemon/:id', component: PokedexentryComponent }, 
  { path: 'pokedex', component: PokemonesComponent }, 

];



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PokemonesComponent,
    FooterComponent,
    PokedexentryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
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
