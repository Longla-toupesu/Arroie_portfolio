import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeBackgroundService } from './services/three-background.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('bgCanvas') bgCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private threeService: ThreeBackgroundService) {}

  ngOnInit(): void {
    // Initialize Three.js background after view init
    setTimeout(() => {
      const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
      if (canvas) {
        const canvasRef = new ElementRef(canvas);
        this.threeService.initBackground(canvasRef);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.threeService.dispose();
  }
}