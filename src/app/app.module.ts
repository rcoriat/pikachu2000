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
  { path: 'pokemon', component: PokedexentryComponent }, 
  { path: '**', redirectTo: '##', pathMatch:'full'},

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
  exports: [
    RouterModule
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
