import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SocialLinksService, SocialLink } from '../../services/social-links.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks: SocialLink[] = [];
  contactLinks: SocialLink[] = [];

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About Me', path: '/about' },
    { label: 'Resume', path: '/skills' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(
    private router: Router,
    private socialLinksService: SocialLinksService
  ) {
    this.socialLinks = this.socialLinksService.getSocialMediaLinks();
    this.contactLinks = this.socialLinksService.getContactLinks();
  }

  navigateTo(path: string): void {
    this.router.navigate([path]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}