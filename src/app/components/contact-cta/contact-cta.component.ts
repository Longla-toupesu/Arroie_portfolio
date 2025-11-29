import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent implements OnInit, AfterViewInit {
  
  constructor(
    private animationService: AnimationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animationService.scrollTriggerAnimation('.cta-content', {
      y: 50,
      opacity: 0,
      duration: 0.2
    });
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  sendEmail(): void {
    window.location.href = 'mailto:kieradharke@gmail.com';
  }
}