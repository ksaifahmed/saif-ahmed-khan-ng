import { Component, Input, Signal } from '@angular/core';
import { skillsCategories } from './skills.dummy';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() backgroundHue!: Signal<number>;
  skillsCategories = skillsCategories
}
