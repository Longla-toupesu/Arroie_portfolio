import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TechStackComponent,
    FeaturedProjectsComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    TestimonialsComponent,
    ContactCtaComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    // Scroll to top on component load
    window.scrollTo(0, 0);
  }
}