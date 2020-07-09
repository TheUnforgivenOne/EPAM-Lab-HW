import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.scss'],
})
export class PokemonWrapperComponent implements OnInit {
  constructor(private pokemonsFromService: PokemonService) {}

  cardsView = true;
  pokemons: Array<PokemonModel> = this.pokemonsFromService.getAll();

  ngOnInit(): void {}

  toggleView() {
    this.cardsView = !this.cardsView;
  }

  toggleIsCaught(pokemon) {
    const { name } = pokemon;

    pokemon.isCaught = !pokemon.isCaught;
    console.log(
      `Pokemon ${name} ${
        pokemon.isCaught ? 'has been caught!' : 'has been released!'
      }`
    );
  }
}
