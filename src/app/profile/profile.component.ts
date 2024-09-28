import { Component, Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() hamburgerActive!: Signal<boolean>;
  @Input() backgroundHue!: Signal<number>;
}
