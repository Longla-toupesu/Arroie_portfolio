import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';
import { ExperienceService, Experience } from '../../services/experience.service';
import { SkillsService, Certification } from '../../services/skills.service';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit, AfterViewInit {
  experiences: Experience[] = [];
  certifications: Certification[] = [];

  constructor(
    private animationService: AnimationService,
    private experienceService: ExperienceService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe(exp => {
      this.experiences = exp;
    });

    this.skillsService.getCertifications().subscribe(certs => {
      this.certifications = certs;
    });
  }

  ngAfterViewInit(): void {
    this.animationService.scrollTriggerAnimation('.section-title', {
      y: 50,
      opacity: 0,
      duration: 0.8
    });

    setTimeout(() => {
      const expCards = document.querySelectorAll('.experience-card');
      expCards.forEach((card, index) => {
        this.animationService.scrollTriggerAnimation(card, {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      });

      const certCards = document.querySelectorAll('.cert-card');
      certCards.forEach((card, index) => {
        this.animationService.scrollTriggerAnimation(card, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15
        });
      });
    }, 100);
  }
}