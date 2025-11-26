import { Injectable } from '@angular/core';

export interface SocialLink {
  name: string;
  icon: string; 
  url: string;
  label: string;
  color: string; 
}

@Injectable({
  providedIn: 'root'
})
export class SocialLinksService {
  private socialLinks: SocialLink[] = [
    {
      name: 'Gmail',
      icon: 'fas fa-envelope',
      url: 'mailto:kieradharke@gmail.com',
      label: 'kieradharke@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/in/chenwie-asang',
      label: 'Chenwie Asang',
      color: '#0A66C2'
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.com',
      label: 'Nix-uriel#0791',
      color: '#5865F2'
    },
    {
        name: 'Github',
        icon: 'fab fa-github',
        url: 'https://github.com/Chenwie07',
        label: 'Kiera07',
        color: '#0202020'
    },
    {
      name: 'Location',
      icon: 'fas fa-map-marker-alt',
      url: '#',
      label: 'Bamenda, Cameroon',
      color: '#00ffab'
    }
  ];

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }

  getSocialLinkByName(name: string): SocialLink | undefined {
    return this.socialLinks.find(link => link.name.toLowerCase() === name.toLowerCase());
  }

  // Get only social media links (exclude email and location)
  getSocialMediaLinks(): SocialLink[] {
    return this.socialLinks.filter(link => 
      !['Gmail', 'Location',].includes(link.name)
    );
  }

  // Get contact links (email, location)
  getContactLinks(): SocialLink[] {
    return this.socialLinks.filter(link => 
      ['Gmail', 'Location'].includes(link.name)
    );
  }

  // Get specific links for footer (commonly used ones)
  getNavbarLinks(): SocialLink[] {
    return this.socialLinks.filter(link => 
      ['Gmail', 'LinkedIn', 'Discord', 'Location'].includes(link.name)
    );
  }
}