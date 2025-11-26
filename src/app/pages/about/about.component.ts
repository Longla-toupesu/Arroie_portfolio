import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimationService } from '../../services/animation.service';
import { CvDownloadService } from '../../services/cv-download.service'; // ADD THIS

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  
  constructor(
    private router: Router,
    private animationService: AnimationService,
    private cvDownloadService: CvDownloadService 
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.animationService.fadeInUp('.page-header', 0.2);
    
    setTimeout(() => {
      this.animationService.staggerFadeInUp('.stat-card', 0.1);
      this.animationService.fadeInUp('.about-content', 0.3);
      this.animationService.staggerFadeInUp('.skill-category', 0.15);
    }, 100);
  }

  downloadResume(): void {
    this.cvDownloadService.downloadCV(); 
  }

  openLinkedIn(): void {
    window.open('https://linkedin.com', '_blank');
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}