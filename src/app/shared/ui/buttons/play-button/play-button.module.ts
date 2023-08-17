import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonComponent } from './play-button.component';

@NgModule({
  declarations: [PlayButtonComponent],
  exports: [PlayButtonComponent],
  imports: [CommonModule],
})
export class PlayButtonModule {}
