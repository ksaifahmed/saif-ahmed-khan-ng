import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {
  @Input() toggleProfileSection!: () => void; 
  @Input() setProfileDown!: (value: boolean) => void;

  isActive = false;
  navbarList = [
    {
      id: 2,
      title: "Skills",
      url: "/skills"
    },
    {
      id: 3,
      title: "Projects",
      url: "/projects"
    },
    {
      id: 1,
      title: "Education",
      url: "/education"
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact"
    }
  ];

  toggleMenu() {
    this.isActive = !this.isActive;
    this.toggleProfileSection();
  }

  closeMenu() {
    this.isActive = false;
    this.setProfileDown(false);
  }
}
