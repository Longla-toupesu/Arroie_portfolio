import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  
  generateProjectPlaceholder(): string {
    // Returns a data URL for a gradient placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#7950f2');
      gradient.addColorStop(0.5, '#4fd1ff');
      gradient.addColorStop(1, '#00ffab');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('PROJECT GAMEPLAY', canvas.width / 2, canvas.height / 2);
      
      return canvas.toDataURL('image/jpeg', 0.8);
    }
    
    return '';
  }

  generateTestimonialPlaceholder(): string {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#00ffab');
      gradient.addColorStop(1, '#0d0d0d');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw circle for avatar
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      
      // Add initials
      ctx.fillStyle = '#7950f2';
      ctx.font = 'bold 64px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CA', canvas.width / 2, canvas.height / 2);
      
      return canvas.toDataURL('image/jpeg', 0.8);
    }
    
    return '';
  }
}