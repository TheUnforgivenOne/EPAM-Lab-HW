import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Pokemon } from '../pokemon-wrapper/pokemon-wrapper.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() handleCatch: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
