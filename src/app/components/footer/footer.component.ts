import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About Me', path: '/about' },
    { label: 'Resume', path: '/skills' },
    { label: 'Contact', path: '/contact' }
  ];

  socialLinks = [
    { icon: 'G', url: 'mailto:kieradharke@gmail.com', label: 'Gmail' },
    { icon: 'in', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '📍', url: '#', label: 'Location' }
  ];

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}