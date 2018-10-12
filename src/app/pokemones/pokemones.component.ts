import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from './../pokeservice.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemones;
  show:boolean;
  constructor(service: PokeserviceService) { 
    this.pokemones = service.getPokemones();
    
  }

  ngOnInit() {
    this.show = true;
  }

  cambio(){
    this.show = !this.show;
  }

}
