import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimationService } from '../../services/animation.service';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedFilter = 'All';

  filters = ['All', '2D', '3D', 'Tools', 'DevOps'];

  constructor(
    private projectsService: ProjectsService,
    private animationService: AnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  ngAfterViewInit(): void {
    this.animationService.fadeInUp('.page-header', 0.2);
    
    setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        this.animationService.fadeInUp(card, index * 0.1);
      });
    }, 100);
  }

  filterProjects(filter: string): void {
    this.selectedFilter = filter;
    
    if (filter === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.platform === filter || project.tags.includes(filter)
      );
    }
  }

  viewProjectDetails(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }

  tryItNow(project: Project): void {
    if (project.tryItNowLink) {
      window.open(project.tryItNowLink, '_blank');
    }
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}