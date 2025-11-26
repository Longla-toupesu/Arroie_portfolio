import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvDownloadService {

  /**
   * Download CV from assets folder
   */
  downloadCV(): void {
    const cvUrl = 'assets/cv/chenwie-asang-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Chenwie_Asang_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Generate and download CV dynamically (if you want to create it programmatically)
   */
  generateAndDownloadCV(): void {
    // This is a placeholder for dynamic CV generation
    // You can use libraries like jsPDF or pdfmake
    console.log('Generating CV...');
    
    // For now, just download the static file
    this.downloadCV();
  }

  /**
   * Open CV in new tab
   */

  viewCV(): void {
    const cvUrl = 'assets/cv/chenwie-asang-cv.pdf';
    window.open(cvUrl, '_blank');
  }
}