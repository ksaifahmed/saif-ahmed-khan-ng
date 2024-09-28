import { Component, Input, Signal, signal } from '@angular/core';
import { PulsatingButtonComponent } from '../pulsating-button/pulsating-button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PulsatingButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() hamburgerActive!: Signal<boolean>;
  @Input() backgroundHue!: Signal<number>;

  doSth() {
    console.log('clicked');
  }
}
