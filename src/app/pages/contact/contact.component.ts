import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimationService } from '../../services/animation.service';
import { SocialLinksService, SocialLink } from '../../services/social-links.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo: SocialLink[] = [];

  constructor(
    private animationService: AnimationService,
    private socialLinksService: SocialLinksService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    // Get all social links for contact page
    this.contactInfo = this.socialLinksService.getSocialLinks();
  }

  ngAfterViewInit(): void {
    this.animationService.fadeInUp('.page-header', 0.2);
    this.animationService.fadeInUp('.contact-form-wrapper', 0.4);
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    console.log('Form submitted:', this.formData);

    const mailtoLink = `mailto:kieradharke@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      
      this.isSubmitting = false;
      this.submitSuccess = true;
      
      setTimeout(() => {
        this.resetForm();
        this.submitSuccess = false;
      }, 2000);
    }, 500);
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim() &&
      this.isValidEmail(this.formData.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}