import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  selectedGalleryImage = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.projectsService.getProjectById(id).subscribe(project => {
      if (project) {
        this.project = project;
      } else {
        this.router.navigate(['/projects']);
      }
    });
  }

  selectGalleryImage(index: number): void {
    this.selectedGalleryImage = index;
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }

  openLiveDemo(): void {
    if (this.project?.links?.live) {
      window.open(this.project.links.live, '_blank');
    }
  }

  openGithub(): void {
    if (this.project?.links?.github) {
      window.open(this.project.links.github, '_blank');
    }
  }
}