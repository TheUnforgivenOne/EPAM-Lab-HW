import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonWrapperComponent } from "./pokemon-wrapper/pokemon-wrapper.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { PokemonRowComponent } from "./pokemon-row/pokemon-row.component";

@NgModule({
  declarations: [
    PokemonWrapperComponent,
    PokemonCardComponent,
    PokemonRowComponent
  ],
  exports: [
    PokemonWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
