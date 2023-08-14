import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TopBarModule,
  NavigationBarModule,
  FavoriteButtonModule,
  PlayButtonModule,
  FooterModule,
} from '@ui';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TopBarModule,
    NavigationBarModule,
    FavoriteButtonModule,
    PlayButtonModule,
    FooterModule,
  ],
})
export class SharedModule {}
