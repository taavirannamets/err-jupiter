import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';

@NgModule({
  declarations: [FavoriteButtonComponent],
  exports: [FavoriteButtonComponent],
  imports: [CommonModule],
})
export class FavoriteButtonModule {}
