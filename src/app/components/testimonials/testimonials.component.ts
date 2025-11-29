import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';
import { TestimonialsService, Testimonial } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  testimonials: Testimonial[] = [];

  constructor(
    private animationService: AnimationService,
    private testimonialsService: TestimonialsService
  ) {}

  ngOnInit(): void {
    this.testimonialsService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
    });
  }

  ngAfterViewInit(): void {
    /*this.animationService.scrollTriggerAnimation('.section-title', {
      y: 50,
      opacity: 0,
      duration: 0.8
    });

    setTimeout(() => {
      const testimonialCards = document.querySelectorAll('.testimonial-card');
      testimonialCards.forEach((card, index) => {
        this.animationService.scrollTriggerAnimation(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    }, 100);*/
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}