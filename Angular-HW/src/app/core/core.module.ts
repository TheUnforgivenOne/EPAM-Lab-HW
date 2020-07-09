import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
