import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemons().subscribe((response) => {
      this.pokemons = response.results;

      this.pokemons.map(pokemon => {
        const pokemonId = this.getId(pokemon.url);
       this.pokemonService.getImage(pokemonId).subscribe((pokeData) => {
        
        const index = this.pokemons.indexOf(pokemon.name);
        pokemon.image = pokeData.sprites.back_default
        pokemon.id = pokemonId
         if(index === -1) this.pokemons[index] = pokemon;
         console.log(this.pokemons);
       })
      })

      this.filteredPokemons = this.pokemons;
    })
  }

  onSearch(term: any){
    this.filteredPokemons = term == "" ? this.pokemons : this.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(term.toLowerCase());
    });

  }

  getId(url: string): number {
    const splitUrl = url.split('/')
    return +splitUrl[splitUrl.length - 2];
  }

}
