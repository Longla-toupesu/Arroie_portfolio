import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimationService } from '../../services/animation.service';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];

  constructor(
    private animationService: AnimationService,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectsService.getFeaturedProjects(3).subscribe(projects => {
      this.projects = projects;
    });
  }

  ngAfterViewInit(): void {
    /*this.animationService.scrollTriggerAnimation('.section-title', {
      y: 50,
      opacity: 0,
      duration: 0.8
    });

    this.animationService.scrollTriggerAnimation('.projects-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });*/

    setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        this.animationService.scrollTriggerAnimation(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    }, 100);
  }

  viewProjectDetails(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }

  viewCode(projectId: number): void {
    // Open GitHub or external link
    console.log('View code for project:', projectId);
  }

  viewAllProjects(): void {
    this.router.navigate(['/projects']);
  }
}