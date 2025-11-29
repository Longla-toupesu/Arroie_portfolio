import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';
import { SkillsService, SkillCategory } from '../../services/skills.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [];

  constructor(
    private animationService: AnimationService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.skillsService.getSkillCategories().subscribe(categories => {
      this.skillCategories = categories;
    });
  }

  ngAfterViewInit(): void {
    /*this.animationService.scrollTriggerAnimation('.section-title', {
      y: 50,
      opacity: 0,
      duration: 0.8
    });*/

    setTimeout(() => {
      const skillCategories = document.querySelectorAll('.skill-category');
      skillCategories.forEach((category, index) => {
        this.animationService.scrollTriggerAnimation(category, {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    }, 100);
  }
}