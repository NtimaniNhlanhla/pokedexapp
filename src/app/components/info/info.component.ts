import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pokemon: any = null;
  id : any= null;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(this.id).subscribe(response => {
      this.pokemon = response
      console.log(this.pokemon)
    })
  }

}
