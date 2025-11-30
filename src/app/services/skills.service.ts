import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillCategories: SkillCategory[] = [
    {
      title: 'Game Development',
      color: '#7950f2',
      skills: [
        { name: 'Unity 2D/3D', level: 95 },
        { name: 'C# Programming', level: 90 },
        { name: 'Game Design', level: 85 }
      ]
    },
    {
      title: 'DevOps & Backend',
      color: '#00ffab',
      skills: [
        { name: 'Firebase', level: 88 },
        { name: 'Azure PlayFab', level: 82 },
        { name: 'CI/CD Pipelines', level: 85 }
      ]
    },
    {
      title: 'Tools & Collaboration',
      color: '#4fd1ff',
      skills: [
        { name: 'Git & Jenkins', level: 90 },
        { name: 'Miro & Notion', level: 85 },
        { name: 'Community Management', level: 92 }
      ]
    }
  ];

  private techStack: TechItem[] = [
    { name: 'Unity 2D/3D', icon: 'fa-brands fa-unity', category: 'Game Development' },
    { name: 'C#', icon: 'fas fa-code', category: 'Programming' },
    { name: 'Firebase', icon: 'fas fa-fire', category: 'Backend & Tools' },
    { name: 'Jenkins', icon: 'fa-brands fa-jenkins', category: 'CI/CD Automation' },
    { name: 'Azure PlayFab', icon: 'fas fa-cloud', category: 'Cloud Solutions' },
    { name: 'GitHub', icon: 'fab fa-github', category: 'Version Control' },
    { name: 'Blender', icon: 'fas fa-cube', category: '3D Modeling' },
    { name: 'Analytics', icon: 'fas fa-chart-line', category: 'Player behavior tracking' },
  ];

  private certifications: Certification[] = [
    {
      title: 'Unity Certified Developer',
      issuer: 'Unity Technologies',
      year: 2023
    },
    {
      title: 'Google Cloud Fundamentals',
      issuer: 'Google',
      year: 2022
    },
    {
      title: 'CI/CD Pipeline Mastery',
      issuer: 'Coursera',
      year: 2021
    }
  ];

  getSkillCategories(): Observable<SkillCategory[]> {
    return of(this.skillCategories);
  }

  getTechStack(): Observable<TechItem[]> {
    return of(this.techStack);
  }

  getCertifications(): Observable<Certification[]> {
    return of(this.certifications);
  }
}