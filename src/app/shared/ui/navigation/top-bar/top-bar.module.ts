import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
