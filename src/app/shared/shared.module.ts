import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TopBarModule,
  NavigationBarModule,
  FavoriteButtonModule,
  PlayButtonModule,
  DataSliderModule,
} from '@ui';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TopBarModule,
    NavigationBarModule,
    FavoriteButtonModule,
    PlayButtonModule,
    DataSliderModule,
  ],
})
export class SharedModule {}
