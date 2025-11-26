import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimationService } from '../../services/animation.service';

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

  contactInfo = [
    { 
      icon: 'G', 
      label: 'kieradharke@gmail.com', 
      link: 'mailto:kieradharke@gmail.com',
      type: 'email'
    },
    { 
      icon: 'in', 
      label: 'Chenwie Asang', 
      link: 'https://linkedin.com',
      type: 'linkedin'
    },
    { 
      icon: '🎮', 
      label: 'Chenwie#0012', 
      link: '#',
      type: 'discord'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
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

    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', this.formData);

    // Create mailto link as fallback
    const mailtoLink = `mailto:kieradharke@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    )}`;

    // Simulate API delay
    setTimeout(() => {
      // Open mailto link
      window.location.href = mailtoLink;
      
      this.isSubmitting = false;
      this.submitSuccess = true;
      
      // Reset form after 2 seconds
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