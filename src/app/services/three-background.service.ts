import { Injectable, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeBackgroundService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private mouseX = 0;
  private mouseY = 0;

  initBackground(canvas: ElementRef<HTMLCanvasElement>): void {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x0d0d0d, 0.0008);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 50;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas.nativeElement,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    this.createParticles();

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x7950f2, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ffab, 1, 100);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    // Mouse movement listener
    window.addEventListener('mousemove', (event: MouseEvent) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Resize listener
    window.addEventListener('resize', () => this.onWindowResize());

    // Start animation
    this.animate();
  }

  private createParticles(): void {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const colors: number[] = [];

    const particleCount = 5000;

    const color1 = new THREE.Color(0x7950f2); // Primary
    const color2 = new THREE.Color(0x00ffab); // Secondary
    const color3 = new THREE.Color(0x4fd1ff); // Accent

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;

      vertices.push(x, y, z);

      // Random color from palette
      const randomColor = Math.random();
      let color: THREE.Color;
      
      if (randomColor < 0.33) {
        color = color1;
      } else if (randomColor < 0.66) {
        color = color2;
      } else {
        color = color3;
      }

      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.4, // REDUCED from 0.8 to 0.4 for less distraction
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Rotate particles
    if (this.particles) {
      this.particles.rotation.y += 0.0005;
      this.particles.rotation.x += 0.0002;
    }

    // Camera follows mouse
    this.camera.position.x += (this.mouseX * 5 - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.mouseY * 5 - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  dispose(): void {
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.particles) {
      this.particles.geometry.dispose();
      (this.particles.material as THREE.Material).dispose();
    }
  }
}