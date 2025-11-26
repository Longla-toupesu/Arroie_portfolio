import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  
  constructor(
    private animationService: AnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Animate hero elements
    this.animationService.fadeIn('.hero-tag', 0.2);
    this.animationService.fadeInUp('.hero-title', 0.4);
    this.animationService.fadeInUp('.hero-subtitle', 0.6);
    this.animationService.fadeInUp('.hero-description', 0.8);
    this.animationService.staggerFadeInUp('.hero-buttons .btn', 0.2);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToProjects(): void {
    this.router.navigate(['/projects']);
  }
}