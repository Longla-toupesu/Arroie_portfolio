import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimationService } from '../../services/animation.service';
import { StatsService, Stat } from '../../services/stats.service';
import { CvDownloadService } from '../../services/cv-download.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, AfterViewInit {
  stats: Stat[] = [];

  constructor(
    private animationService: AnimationService,
    private statsService: StatsService,
    private router: Router,
    private cvDownloadService: CvDownloadService
  ) { }

  ngOnInit(): void {
    this.statsService.getStats().subscribe(stats => {
      this.stats = stats;
    });
  }

  ngAfterViewInit(): void {
    /*this.animationService.scrollTriggerAnimation('.about-title', {
      x: -50,
      opacity: 0,
      duration: 0.8
    });

    this.animationService.scrollTriggerAnimation('.about-content', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    });*/

    setTimeout(() => {
      const statCards = document.querySelectorAll('.stat-card');
      statCards.forEach((card, index) => {
        this.animationService.scrollTriggerAnimation(card, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1
        });
      });
    }, 100);
  }

  downloadResume(): void {
    this.cvDownloadService.downloadCV();
    console.log('Download resume');
  }

  openLinkedIn(): void {
    window.open('https://linkedin.com', '_blank');
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}