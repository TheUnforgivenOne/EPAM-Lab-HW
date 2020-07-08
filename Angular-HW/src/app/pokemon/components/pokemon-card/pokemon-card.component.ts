import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-wrapper/pokemon-wrapper.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {}

  isCaught = false;

  ngOnInit(): void {}

  handleCatch(): void {
    this.isCaught = !this.isCaught;
    console.log(`Pokemon ${this.pokemon.name} ${this.isCaught ? 'has been caught!' : 'has been released!'}`);
  }
}
