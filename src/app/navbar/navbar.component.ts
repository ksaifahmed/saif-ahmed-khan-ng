import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {
  @Output() setProfileDownEmitter = new EventEmitter<boolean>();

  isActive = false;
  navbarList = [
    {
      id: 2,
      title: "Skills",
      url: "/#skills"
    },
    {
      id: 3,
      title: "Projects",
      url: "/#projects"
    },
    {
      id: 1,
      title: "Education",
      url: "/#education"
    },
    {
      id: 4,
      title: "Contact",
      url: "/#contact"
    }
  ];

  toggleMenu() {
    this.isActive = !this.isActive;
    this.setProfileDownEmitter.emit(this.isActive);
  }

  closeMenu() {
    this.isActive = false;
    this.setProfileDownEmitter.emit(false);
  }
}
