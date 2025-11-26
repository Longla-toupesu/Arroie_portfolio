import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Chenwie Asang - Game Developer Portfolio'
  },
  { 
    path: 'home', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects - Chenwie Asang'
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project Details - Chenwie Asang'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Me - Chenwie Asang'
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills-resume/skills-resume.component').then(m => m.SkillsResumeComponent),
    title: 'Skills & Resume - Chenwie Asang'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact - Chenwie Asang'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];