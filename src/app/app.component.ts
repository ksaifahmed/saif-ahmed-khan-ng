import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from "./profile/profile.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EducationComponent } from "./education/education.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, ProfileComponent, SkillsComponent, ProjectsComponent, EducationComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  currentYear = new Date().getFullYear();
  hamburgerActive = signal(false);

  toggleProfileSection = () => {
    this.hamburgerActive.set(!this.hamburgerActive);
  }

  setProfileDown = (value: boolean) => {
    this.hamburgerActive.set(value);
  }
}
