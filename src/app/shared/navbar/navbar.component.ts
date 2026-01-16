import { Component,HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isDropdownOpen: boolean = false;
  @Input() isMenuOpen: boolean = false;
  screenWidth: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.screenWidth = window.innerWidth;
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
    this.isDropdownOpen = false; // Close dropdown when menu is closed

  }

  logout(): void {
    this.authService.logout();
    this.closeMenu();
    this.router.navigate(['/home']);
  }

}
