import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlaceholderService } from './placeholder.service';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonials: Testimonial[] = [];

  constructor(private placeholderService: PlaceholderService) {
    const placeholderImage = this.placeholderService.generateTestimonialPlaceholder();
    
    this.testimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Project Manager',
        company: 'TechGaming Inc',
        image: placeholderImage,
        text: 'Chenwie\'s ability to translate complex game mechanics into smooth, enjoyable experiences is exceptional. A true professional.',
        rating: 5
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Lead Developer',
        company: 'GameStudio Pro',
        image: placeholderImage,
        text: 'Working with Chenwie on our multiplayer project was fantastic. His technical skills and creative problem-solving were invaluable.',
        rating: 5
      },
      {
        id: 3,
        name: 'Emma Williams',
        role: 'Community Manager',
        company: 'Indie Games Hub',
        image: placeholderImage,
        text: 'Chenwie has been a beacon of feedback and support. His work is top-tier and very pleasant.',
        rating: 5
      }
    ];
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }

  getTestimonialById(id: number): Observable<Testimonial | undefined> {
    const testimonial = this.testimonials.find(t => t.id === id);
    return of(testimonial);
  }
}