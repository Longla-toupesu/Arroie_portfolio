import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';
import { SkillsService, TechItem } from '../../services/skills.service';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit, AfterViewInit {
  techStack: TechItem[] = [];

  constructor(
    private animationService: AnimationService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.skillsService.getTechStack().subscribe(tech => {
      this.techStack = tech;
    });
  }

  ngAfterViewInit(): void {
    this.animationService.scrollTriggerAnimation('.tech-stack-title', {
      y: 50,
      opacity: 0,
      duration: 0.8
    });

    this.animationService.scrollTriggerAnimation('.tech-grid', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });
  }
}