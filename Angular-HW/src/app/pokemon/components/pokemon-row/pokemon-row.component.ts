import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PokemonModel } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonRowComponent implements OnInit {
  @Input() pokemon: PokemonModel;
  @Output() handleCatch: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
