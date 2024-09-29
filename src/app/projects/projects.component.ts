import { Component, Input, Signal,  } from '@angular/core';
import { Projects } from './projects.dummy';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() backgroundHue!: Signal<number>;
  projects = Projects;
}
