import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonWrapperComponent } from "./components/pokemon-wrapper/pokemon-wrapper.component";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";
import { PokemonRowComponent } from "./components/pokemon-row/pokemon-row.component";

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
