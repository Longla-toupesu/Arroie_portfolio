import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentRoute = '';

  navLinks = [
    { label: 'Home', path: '/', isExternal: false },
    { label: 'About Me', path: '/about', isExternal: false },
    { label: 'Projects', path: '/projects', isExternal: false },
    { label: 'Skills & Resume', path: '/skills', isExternal: false },
    { label: 'Contact', path: '/contact', isExternal: false }
  ];

  socialLinks = [
    { icon: 'G', url: 'mailto:kieradharke@gmail.com', label: 'Gmail' },
    { icon: 'f', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'i', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'in', url: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
      });

    // Set initial route
    this.currentRoute = this.router.url;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateTo(path: string): void {
    this.closeMobileMenu();
    this.router.navigate([path]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  isActiveRoute(path: string): boolean {
    if (path === '/') {
      return this.currentRoute === '/';
    }
    return this.currentRoute.startsWith(path);
  }
}