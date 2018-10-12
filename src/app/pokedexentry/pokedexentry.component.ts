import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from './../pokeservice.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonesComponent } from '../pokemones/pokemones.component';

@Component({
  selector: 'app-pokedexentry',
  templateUrl: './pokedexentry.component.html',
  styleUrls: ['./pokedexentry.component.css']
})
export class PokedexentryComponent implements OnInit {
  evoluciones;
  traigopokemon;
  tipos;

  constructor(
    private ruta:ActivatedRoute,
    private servicio:PokeserviceService
  ){
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])
      this.traigopokemon = this.servicio.getPokemon(params['id'])
      this.tipos = this.servicio.getPokemon(params['id']).types
      this.evoluciones = this.servicio.getPokemon(params['id']).evolutions
    })
  }


  ngOnInit() {
  }

}


