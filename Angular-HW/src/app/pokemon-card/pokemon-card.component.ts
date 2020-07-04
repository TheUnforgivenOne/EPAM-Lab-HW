import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-body/pokemon-body.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {}

  isCaught = false;
  catchBtnText = 'Catch';

  ngOnInit(): void {}

  handleCatch() {
    if (this.isCaught) {
      console.log(`Pokemon ${this.pokemon.name} has been released!`);
    } else {
      console.log(`Pokemon ${this.pokemon.name} has been caught!`);
    }
    this.isCaught = !this.isCaught;
    this.catchBtnText === 'Catch'
      ? (this.catchBtnText = 'Release')
      : (this.catchBtnText = 'Catch');
  }
}
