import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Pokemon } from "../pokemon-wrapper/pokemon-wrapper.component";

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonRowComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() handleCatch: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  // isCaught = false;

  ngOnInit(): void {}

  // handleCatch(): void {
  //   this.isCaught = !this.isCaught;
  //   console.log(`Pokemon ${this.pokemon.name} ${this.isCaught ? 'has been caught!' : 'has been released!'}`);
  // }
}
