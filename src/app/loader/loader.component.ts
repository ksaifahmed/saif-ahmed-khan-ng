import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  isProcessRunning = false;

  showProcessLoader() {
    this.isProcessRunning = true;
  }

  hideProcessLoader() {
    this.isProcessRunning = false;
  }
}
