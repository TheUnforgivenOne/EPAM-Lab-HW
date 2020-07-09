import { Injectable } from '@angular/core';
import { PokemonModel } from "../models/pokemon.model";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Array<PokemonModel> = [
    {
      id: 1,
      name: 'Bulbasaur',
      isCaught: false,
      damage: 10,
      imgSource: '../assets/PokemonImages/1.png',
    },
    {
      id: 2,
      name: 'Big Bulba',
      isCaught: false,
      damage: 40,
      imgSource: '../assets/PokemonImages/2.png',
    },
    {
      id: 3,
      name: 'Biggest Bulba',
      isCaught: false,
      damage: 60,
      imgSource: '../assets/PokemonImages/3.png',
    },
    {
      id: 4,
      name: 'Charmander',
      isCaught: false,
      damage: 9000,
      imgSource: '../assets/PokemonImages/4.png',
    },
    {
      id: 5,
      name: 'Big Charmander',
      isCaught: false,
      damage: 1337,
      imgSource: '../assets/PokemonImages/5.png',
    },
    {
      id: 6,
      name: 'Flying Charmander',
      isCaught: false,
      damage: 24,
      imgSource: '../assets/PokemonImages/6.png',
    },
    {
      id: 7,
      name: 'Squirtle',
      isCaught: false,
      damage: 50,
      imgSource: '../assets/PokemonImages/7.png',
    },
    {
      id: 8,
      name: 'Burtle',
      isCaught: false,
      damage: 0,
      imgSource: '../assets/PokemonImages/8.png',
    },
    {
      id: 9,
      name: 'Bowser',
      isCaught: false,
      damage: 0,
      imgSource: '../assets/PokemonImages/9.png',
    },
    {
      id: 10,
      name: 'Caterpie',
      isCaught: false,
      damage: 420,
      imgSource: '../assets/PokemonImages/10.png',
    },
    {
      id: 11,
      name: 'What the heck',
      isCaught: false,
      damage: 5,
      imgSource: '../assets/PokemonImages/11.png',
    },
    {
      id: 12,
      name: 'A butterfly',
      isCaught: false,
      damage: 1,
      imgSource: '../assets/PokemonImages/12.png',
    },
  ];

  constructor() {}

  getAll(): Array<PokemonModel> {
    return this.pokemons;
  }

  getById(id): Array<PokemonModel> {
    return this.pokemons.filter((pokemon) => pokemon.id === id);
  }

  filterByName(): Array<PokemonModel> {
    return this.pokemons.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
}
