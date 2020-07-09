import {Component, OnInit} from '@angular/core';

export interface Pokemon {
  id: number,
  name: string,
  isCaught: boolean,
  damage: number,
  imgSource: string
}

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.scss']
})
export class PokemonWrapperComponent implements OnInit {

  constructor() { }

  cardsView = true;
  pokemons: Pokemon[] = [
    {id: 1, name: 'Bulbasaur', isCaught: false, damage: 10, imgSource: '../assets/PokemonImages/1.png'},
    {id: 2, name: 'Big Bulba', isCaught: false, damage: 40, imgSource: '../assets/PokemonImages/2.png'},
    {id: 3, name: 'Biggest Bulba', isCaught: false, damage: 60, imgSource: '../assets/PokemonImages/3.png'},
    {id: 4, name: 'Charmander', isCaught: false, damage: 9000, imgSource: '../assets/PokemonImages/4.png'},
    {id: 5, name: 'Big Charmander', isCaught: false, damage: 0, imgSource: '../assets/PokemonImages/5.png'},
    {id: 6, name: 'Flying Charmander', isCaught: false, damage: 24, imgSource: '../assets/PokemonImages/6.png'},
    {id: 7, name: 'Squirtle', isCaught: false, damage: 50, imgSource: '../assets/PokemonImages/7.png'},
    {id: 8, name: 'Burtle', isCaught: false, damage: 0, imgSource: '../assets/PokemonImages/8.png'},
    {id: 9, name: 'Bowser', isCaught: false, damage: 1337, imgSource: '../assets/PokemonImages/9.png'},
    {id: 10, name: 'Caterpie', isCaught: false, damage: 420, imgSource: '../assets/PokemonImages/10.png'},
    {id: 11, name: 'What the heck', isCaught: false, damage: 5, imgSource: '../assets/PokemonImages/11.png'},
    {id: 12, name: 'A butterfly', isCaught: false, damage: 1, imgSource: '../assets/PokemonImages/12.png'}
  ];

  ngOnInit(): void {
  }

  toggleView() {
    this.cardsView = !this.cardsView;
  }

  toggleIsCaught(pokemon) {
    const { name } = pokemon;

    pokemon.isCaught = !pokemon.isCaught;
    console.log(`Pokemon ${name} ${pokemon.isCaught ? 'has been caught!' : 'has been released!'}`);
  }
}
