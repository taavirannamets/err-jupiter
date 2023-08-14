import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  logo = '../../../../../../assets/brand/jupiter-logo_ua.svg';
  buttonText = 'Logi sisse';
}
