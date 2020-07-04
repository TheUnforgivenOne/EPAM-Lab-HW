import { Component, OnInit } from '@angular/core';

export interface Pokemon {
  id: number,
  name: string,
  damage: number,
  imgSource: string
}

@Component({
  selector: 'app-pokemon-body',
  templateUrl: './pokemon-body.component.html',
  styleUrls: ['./pokemon-body.component.scss']
})
export class PokemonBodyComponent implements OnInit {

  constructor() { }

  cardsView = true;
  pokemons: Pokemon[] = [
    {id: 1, name: 'Bulbasaur', damage: 10, imgSource: '../assets/PokemonImages/1.png'},
    {id: 2, name: 'Big Bulba', damage: 40, imgSource: '../assets/PokemonImages/2.png'},
    {id: 3, name: 'Biggest Bulba', damage: 60, imgSource: '../assets/PokemonImages/3.png'},
    {id: 4, name: 'Charmander', damage: 9000, imgSource: '../assets/PokemonImages/4.png'},
    {id: 5, name: 'Big Charmander', damage: 0, imgSource: '../assets/PokemonImages/5.png'},
    {id: 6, name: 'Flying Charmander', damage: 24, imgSource: '../assets/PokemonImages/6.png'},
    {id: 7, name: 'Squirtle', damage: 50, imgSource: '../assets/PokemonImages/7.png'},
    {id: 8, name: 'Burtle', damage: 0, imgSource: '../assets/PokemonImages/8.png'},
    {id: 9, name: 'Bowser', damage: 1337, imgSource: '../assets/PokemonImages/9.png'},
    {id: 10, name: 'Caterpie', damage: 420, imgSource: '../assets/PokemonImages/10.png'},
    {id: 11, name: 'What the heck', damage: 5, imgSource: '../assets/PokemonImages/11.png'},
    {id: 12, name: 'A butterfly', damage: 1, imgSource: '../assets/PokemonImages/12.png'}
  ];

  ngOnInit(): void {
  }

  toggleView() {
    this.cardsView = !this.cardsView;
  }
}
