import { Component, Input, Signal,  } from '@angular/core';
import { EducationList } from './education.dummy';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() backgroundHue!: Signal<number>;
  listOfEducation = EducationList;
}
