import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      title: 'Game Developer & Community Admin',
      company: 'Maliyo Games',
      location: 'Lagos, Nigeria (Remote)',
      period: 'May 2022 - Present',
      description: 'Designed and developed multiple Unity-based games, managed CI/CD pipelines, and led community engagement strategies that increased user retention by 40%.',
      achievements: [
        'Designed and developed multiple Unity-based games',
        'Managed CI/CD pipelines',
        'Led community engagement strategies',
        'Increased user retention by 40%'
      ]
    },
    {
      title: 'Freelance Game Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      period: '2019 - 2022',
      description: 'Developed small-scale indie games and prototypes, managed project pipelines using Git and Notion, and collaborated with international teams on various gaming initiatives.',
      achievements: [
        'Developed small-scale indie games and prototypes',
        'Managed project pipelines using Git and Notion',
        'Collaborated with international teams'
      ]
    }
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}