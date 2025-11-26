import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimationService } from '../../services/animation.service';
import { CvDownloadService } from '../../services/cv-download.service'; // ADD THIS
import { SkillsService, SkillCategory, Certification } from '../../services/skills.service';
import { ExperienceService, Experience } from '../../services/experience.service';

@Component({
  selector: 'app-skills-resume',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './skills-resume.component.html',
  styleUrls: ['./skills-resume.component.scss']
})
export class SkillsResumeComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [];
  experiences: Experience[] = [];
  certifications: Certification[] = [];

  technicalSkills = [
    {
      title: 'Game Development',
      items: ['Unity 2D/3D, C#, Game Design, SDK Integration']
    },
    {
      title: 'DevOps & Backend',
      items: ['Firebase, Jenkins, GitHub Actions, CI/CD Pipelines']
    },
    {
      title: 'Soft Skills',
      items: ['Team Leadership, Mentorship, Communication']
    },
    {
      title: 'Tools',
      items: ['Git, Miro, Notion, HacknPlan, Microsoft Office Suite']
    }
  ];

  constructor(
    private skillsService: SkillsService,
    private experienceService: ExperienceService,
    private animationService: AnimationService,
    private cvDownloadService: CvDownloadService // ADD THIS
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.skillsService.getCertifications().subscribe(certs => {
      this.certifications = certs;
    });

    this.experienceService.getExperiences().subscribe(exp => {
      this.experiences = exp;
    });
  }

  ngAfterViewInit(): void {
    this.animationService.fadeInUp('.page-header', 0.2);
    
    setTimeout(() => {
      this.animationService.staggerFadeInUp('.skill-card', 0.1);
      this.animationService.staggerFadeInUp('.experience-item', 0.15);
      this.animationService.staggerFadeInUp('.cert-card', 0.1);
    }, 100);
  }

  downloadCV(): void {
    this.cvDownloadService.downloadCV(); // USE THE SERVICE
  }
}