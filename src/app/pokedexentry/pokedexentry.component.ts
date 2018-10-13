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
  evoluciones = [];
  traigopokemon;
  tipos;
  evopoke = [];


  constructor(
    private ruta:ActivatedRoute,
    private servicio:PokeserviceService
  ){
    this.ruta.params.subscribe(params=>{
      this.traigopokemon = this.servicio.getPokemon(params['id'])
      this.tipos = this.servicio.getPokemon(params['id']).types
      this.evoluciones = this.servicio.getPokemon(params['id']).evolutions

      for(let i of this.evoluciones){
        if(this.servicio.getPokemonByName((String)(i.to)) == null){
          continue;
        }
        this.evopoke.push(this.servicio.getPokemonByName((String)(i.to)))
      }
      console.log(this.evopoke)
    })
  }

  tieneEvoluciones(){
    if(this.evoluciones == []){
      return false;
    } else if(this.evopoke.length == 0) {
      return false;
    }
    else {
      return true;
    }    
  }


  ngOnInit() {
  }

}


