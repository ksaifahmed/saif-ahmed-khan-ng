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

  downloadCV(event: Event): void {
    event.preventDefault();
    
    try {
      const cvUrl = "files/Saif_Ahmed_Khan_CV.pdf";
      const link = document.createElement('a');
      
      link.href = cvUrl;
      link.download = "Saif_Ahmed_Khan_CV.pdf"
      link.click();
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('An error occurred while downloading!');
    }
  }
}
